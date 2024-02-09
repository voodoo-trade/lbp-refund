import { getAddress } from 'ethers'
import fjordBuyers from './snapshots/fjord-snapshot.json'
import baseHolders from './snapshots/vmx-holders-base-10353526.json'
import ethHolders from './snapshots/vmx-holders-ethereum-19191794.json'
import fs from 'node:fs'

const TEAM_WALLETS = [
  // Team
  '0x0d016CC22f7f7e604D786aEDee836750b2CB5dbB',

  // Initial liquidity
  '0x070b06133737940Ed5F6733671AB1e39050321da',

  // Ecosystem and Partnerships
  '0xa65Abb3b88D7a0a916615Dec70e4655153F0901B',

  // Airdrop and Trading Incentives
  '0xba1d7dc818280fB850d5dFc4805819c0CE34aDF6',

  // Liquidity Mining
  '0x67d3003e43a56d0902610E8371CA3a2602f6af5c',

  // Voodoo Deployer
  '0x9cBa37df627CdAa6548E1a837F82773D68E593D0',

  // Voodoo crank key
  '0x7bD8a138d440c47fab9164818a658a324FDe417A'
].map(addr => getAddress(addr))

async function main() {
  const refundsPerAddress = new Map<string, number>()
  const holdingsPerAddress = new Map<string, number>()

  for (const fjordBuyer of fjordBuyers) {
    try {
      const address = extractAddress(fjordBuyer.user_link)

      if (TEAM_WALLETS.includes(address)) {
        continue
      }
      const vmxBoughtInFjord = fjordBuyer.shares_amount
      refundsPerAddress.set(address, vmxBoughtInFjord)
    } catch (error) {
    }
  }

  for (const baseHolder of baseHolders) {
    const address = getAddress(baseHolder.HolderAddress)
    const refundAmount = refundsPerAddress.get(address)

    if (refundAmount !== undefined) {
      holdingsPerAddress.set(address, baseHolder.Balance)
    }
  }

  for (const holder of ethHolders) {
    const address = getAddress(holder.HolderAddress)
    const refundAmount = refundsPerAddress.get(address)

    if (refundAmount !== undefined) {
      let balance = 0

      if (typeof(holder.Balance) === 'number') {
        balance = holder.Balance
      } else if (typeof(holder.Balance) === 'string') {

        const indexOfPeriod = holder.Balance.indexOf('.')

        if (indexOfPeriod === -1) {
          balance = Number(holder.Balance.replace(/,/g, ''))
          if (isNaN(balance)) {
            throw Error('Not a number balance for ' + JSON.stringify(holder))
          }
        } else {
          const balanceStr = holder.Balance.substring(0, indexOfPeriod).replace(/,/g, '')

          balance = Number(balanceStr)
          if (isNaN(balance)) {
            console.log('holder.Balance', holder.Balance)
            throw Error('Not a number balance for ' + JSON.stringify(holder))
          }
        }

      }

      const existingHoldings = holdingsPerAddress.get(address) ?? 0
      holdingsPerAddress.set(address, balance + existingHoldings)
    }
  }

  const refundsArray = Array.from(refundsPerAddress).map(([address, balance]) => {
    const holdings = holdingsPerAddress.get(address)

    if (holdings !== undefined) {
      return {
        address,
        balance: Math.min(balance, holdings)
      }
    } else {
      return { address, balance: 0 }
    }
  }).sort((a, b) => {
    return b.balance - a.balance
  })

  const balancesJSON = JSON.stringify(refundsArray, null, 2);

  fs.writeFileSync('snapshot.json', balancesJSON)

  let dueVmx = 0
  for (const userRefund of refundsArray) {
    dueVmx += userRefund.balance
  }

  console.log('due', dueVmx)
  console.log('user count', refundsArray.length)
}

void main()

function extractAddress(input: string): string {
  const regex = />(.*?)</; // Matches anything between ">" and "<"
  const match = input.match(regex);
  if (match && match[1]) {
      const addr = match[1]

      return getAddress(addr)
      // return addr
  } else {
    throw Error('Failed to extract for ' + input)
  }
}
