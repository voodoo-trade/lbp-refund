import { getAddress } from 'ethers'
import { StandardMerkleTree } from "@openzeppelin/merkle-tree"
import fjordBuyers from './snapshots/fjord-snapshot.json'
import baseHolders from './snapshots/vmx-holders-base-10353526.json'
import ethHolders from './snapshots/vmx-holders-ethereum-19191794.json'
import fs from 'node:fs'
import invariant from 'tiny-invariant'

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
  const lbpBuyers = new Map<string, number>()
  const holdingsPerAddress = new Map<string, number>()

  let totalVmxSold = 0
  let totalParticipants = 0
  for (const fjordBuyer of fjordBuyers) {
    try {
      const address = extractAddress(fjordBuyer.user_link)

      if (TEAM_WALLETS.includes(address)) {
        continue
      }
      const vmxBoughtInFjord = fjordBuyer.shares_amount
      lbpBuyers.set(address, vmxBoughtInFjord)

      totalVmxSold += vmxBoughtInFjord
      totalParticipants += 1
    } catch (error) {
    }
  }

  for (const baseHolder of baseHolders) {
    const address = getAddress(baseHolder.HolderAddress)
    const refundAmount = lbpBuyers.get(address)

    if (refundAmount !== undefined && refundAmount > 1) {
      holdingsPerAddress.set(address, baseHolder.Balance)
    }
  }

  for (const holder of ethHolders) {
    const address = getAddress(holder.HolderAddress)
    const refundAmount = lbpBuyers.get(address)

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

      if (balance > 1) {
        holdingsPerAddress.set(address, existingHoldings + balance)
      }

    }
  }

  // LBP participants who are holding full or part of the LBP tokens
  const holderBalances = Array.from(lbpBuyers).map(([address, balance]) => {
    const holdings = holdingsPerAddress.get(address)

    if (holdings !== undefined) {
      return {
        address,
        balance: Math.min(balance, holdings)
      }
    } else {
      return { address, balance: 0 }
    }
  }).filter(account => account.balance > 1).sort((a, b) => {
    return b.balance - a.balance
  })

  // Sellers- LBP buyers sold completely, or those who did not redeem at snapshot time
  const sellerBalances = Array.from(lbpBuyers).filter(([address, lbpBought]) => {
    const currentBalance = holdingsPerAddress.get(address) ?? 0

    return currentBalance < 1
  }).map(([address, lbpBought]) => {
    return {
      address,
      balance: lbpBought
    }
  })

  const common = findCommonElements(holderBalances, sellerBalances)
  invariant(common.length === 0)

  const holderBalancesJSON = JSON.stringify(holderBalances, null, 2);
  fs.writeFileSync('holders-snapshot.json', holderBalancesJSON)

  const sellerBalancesJSON = JSON.stringify(sellerBalances, null, 2);
  fs.writeFileSync('sellers-snapshot.json', sellerBalancesJSON)

  let holderVmx = 0
  for (const balances of holderBalances) {
    holderVmx += balances.balance
  }

  let sellerVmx = 0
  for (const refund of sellerBalances) {
    sellerVmx += refund.balance
  }

  const holderRateUsd = 0.12
  const sellerRateUsd = 0.09

  const ethPrice = 2500

  const holderRateEth = holderRateUsd / ethPrice
  const sellerRateEth = sellerRateUsd / ethPrice

  const holderRefund = holderVmx * holderRateUsd
  const sellerRefund = sellerVmx * sellerRateUsd

  const missingParticipants = totalParticipants - holderBalances.length - sellerBalances.length
  invariant(missingParticipants === 0)

  console.log('LBP participants:', totalParticipants, ',VMX sold:', totalVmxSold.toLocaleString())
  console.log('holders:', holderBalances.length, ',VMX:', holderVmx.toLocaleString(), ',rate: $', holderRateUsd, ',refund: $', holderRefund.toLocaleString())
  console.log('sellers:', sellerBalances.length, ',VMX:', sellerVmx.toLocaleString(), ',rate: $', sellerRateUsd, ',refund: $', sellerRefund.toLocaleString())

  console.log('Money to refund: $', (holderRefund + sellerRefund).toLocaleString())

  // Generate merkle trees
  // const holderTreeValues = holderBalances.map(({ address, balance }) => {
  //   const refund = BigInt(Math.floor(balance * holderRateEth * 10**8)) * 10n**10n

  //   return [address, refund.toString()]
  // })
  // const holderTree = StandardMerkleTree.of(holderTreeValues)
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

interface Holder {
  address: string;
  balance: number;
}


function findCommonElements(arr1: Holder[], arr2: Holder[]): Holder[] {
  // Filter elements of arr1 that are present in arr2
  return arr1.filter(holderA => arr2.some(holderB => holderA.address === holderB.address && holderA.balance === holderB.balance));
}

// function getAmountInEth(vmx: number, rateUsd: number): bigint {
//   const vmxE18 = BigInt(Math.floor(vmx)) * 10n**18n

//   const ethPrice = 2500
// }