import { getAddress } from 'ethers'
import fjordBuyers from './snapshots/fjord-snapshot.json'
import baseHolders from './snapshots/vmx-holders-base-10353526.json'
import ethHolders from './snapshots/vmx-holders-ethereum-19191794.json'
import fs from 'node:fs'

// interface RefundDue {
//   address: string
//   vmxHeld: number
// }



async function main() {
  const refundsPerAddress = new Map<string, number>()
  const holdingsPerAddress = new Map<string, number>()

  for (const fjordBuyer of fjordBuyers) {
    try {
      const address = extractAddress(fjordBuyer.user_link)
      const vmxBoughtInFjord = fjordBuyer.shares_amount

      // console.log('setting', fjordBuyer.shares_amount)
      refundsPerAddress.set(address, vmxBoughtInFjord)
    } catch (error) {
      console.log(fjordBuyer.user_link, fjordBuyer.shares_amount)
    }
  }

  for (const baseHolder of baseHolders) {
    const address = getAddress(baseHolder.HolderAddress)
    const refundAmount = refundsPerAddress.get(address)

    if (refundAmount) {
      const due = Math.min(refundAmount, baseHolder.Balance)

      refundsPerAddress.set(address, due)
    }
  }

  for (const holder of ethHolders) {
    const address = getAddress(holder.HolderAddress)
    const refundAmount = refundsPerAddress.get(address)

    if (refundAmount) {
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
      const due = Math.min(refundAmount, balance)

      refundsPerAddress.set(address, due)
    }
  }

  const balancesArray = Array.from(refundsPerAddress).map(([address, balance]) => ({ address, balance }));
  const balancesJSON = JSON.stringify(balancesArray, null, 2);

  fs.writeFileSync('snapshot.json', balancesJSON)

  let dueVmx = 0
  for (const userRefund of balancesArray) {
    dueVmx += userRefund.balance
  }

  console.log('due', dueVmx)
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
