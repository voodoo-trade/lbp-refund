import sleep from 'thread-sleep'
import fs from 'node:fs'

import wallets from '../compensation.json'
import { multisend } from './contracts'
import { formatEther } from 'ethers'

const compensationPerHash = new Map<string, {
  address: string;
  vmxBought: number;
  compensationWei: string;
}[]>()

async function main() {
  // IMPORTANT- end is inclusive. If it fails midway, start with 'completed index' + 1
  const START_INDEX = 14

  const walletChunks = chunkArray(wallets, 20)

  let i = 0

  try {
    for (i = START_INDEX; i < walletChunks.length; i++) {
      const chunk = walletChunks[i]

      const chunkLength = chunk.length

      const paddingLength = 100 - chunkLength
      const addresses = [
        ...chunk.map(user => user.address),
        ...createArrayOfValues('0x0000000000000000000000000000000000000000', paddingLength)
      ]
      const amounts = [
        ...chunk.map(user => BigInt(user.compensationWei)),
        ...createArrayOfBigInt(0n, paddingLength)
      ]

      const value = amounts.reduce((acc, current) => acc + current, 0n)

      const resp = await multisend.multiSendEther(addresses, amounts, {
        value,
      })
      compensationPerHash.set(resp.hash, chunk)
      console.log('chunk', i, 'hash', resp.hash, 'ETH', formatEther(value))

      sleep(50_000)

    }
  } catch (error) {
    console.error('error', error)

    // The chunk that failed does not count
    i-= 1
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

function createArrayOfValues(value: string, n: number): string[] {
  const array: string[] = [];

  for (let i = 0; i < n; i++) {
      array.push(value);
  }

  return array;
}

function createArrayOfBigInt(value: bigint, n: number): bigint[] {
  const array: bigint[] = [];

  for (let i = 0; i < n; i++) {
      array.push(value);
  }

  return array;
}