import sleep from 'thread-sleep'
import fs from 'node:fs'

import wallets from '../compensation.json'
import { multisend } from './contracts'

const compensationPerHash = new Map<string, {
  address: string;
  vmxBought: number;
  compensationWei: string;
}[]>()

async function main() {
  // IMPORTANT- end is inclusive. If it fails midway, start with 'completed index' + 1
  const START_INDEX = 0

  const walletChunks = chunkArray(wallets, 20)

  let i = 0

  try {
    for (i = START_INDEX; i < walletChunks.length; i++) {
      const chunk = walletChunks[i]

      const addresses = chunk.map(user => user.address)
      const amounts = chunk.map(user => BigInt(user.compensationWei))
      const value = amounts.reduce((acc, current) => acc + current, 0n)

      // const resp = await multisend.multiSendEther(addresses, amounts, {
      //   value,
      // })
      // compensationPerHash.set(resp.hash, chunk)

      compensationPerHash.set(`hash=${i}`, chunk)

      // end is inclusive
      console.log('completed index', i, 'sent', value)

      sleep(5000)

      throw Error('First done')
    }
  } catch (error) {
    console.error('error', error)
  }

  const compensationArray = Array.from(compensationPerHash).map(compensation => {
    return {
      [compensation[0]]: compensation[1]
    }
  })

  fs.writeFileSync(`refunds/completed-refund-${START_INDEX}-${i}.json`, JSON.stringify(compensationArray, null, 4))

}

void main()

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
