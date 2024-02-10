import { formatEther, getAddress } from 'ethers'
import { StandardMerkleTree } from "@openzeppelin/merkle-tree"
import fjordBuyers from './snapshots/fjord-snapshot.json'
import fs from 'node:fs'

async function main() {
  const lbpParticipants = new Map<string, {
    vmxBought: number,
    compensationWei: BigInt
  }>()

  let totalVmxSold = 0
  let totalParticipants = 0
  let totalCompensationWei = 0n

  // $0.10 per VMX when ETH is $2500
  const refundRateWei = 40000000000000n

  for (const fjordBuyer of fjordBuyers) {
    try {
      const address = extractAddress(fjordBuyer.user_link)

      const vmxBought = Math.floor(fjordBuyer.shares_amount)

      const compensationWei = BigInt(vmxBought) * refundRateWei
      lbpParticipants.set(address, {
        vmxBought,
        compensationWei
      })

      totalVmxSold += vmxBought
      totalParticipants += 1
      totalCompensationWei += compensationWei
    } catch (error) {
      console.log('broken address', fjordBuyer.user_link, 'invested', fjordBuyer.net_token_amount, 'vmx', fjordBuyer.shares_amount)
    }
  }

  const totalCompensationEth = formatEther(totalCompensationWei)
  console.log('total compensation in ETH', totalCompensationEth)

  const compensationArray = Array.from(lbpParticipants).map((lbpParticipant) => {
    return {
      address: lbpParticipant[0],
      vmxBought: lbpParticipant[1].vmxBought,
      compensationWei: lbpParticipant[1].compensationWei.toString(),
    }
  })

  fs.writeFileSync('compensation.json', JSON.stringify(compensationArray, null, 4))

  // Generate merkle trees
  const merkleTreeValues = Array.from(lbpParticipants).map((lbpParticipant) => {
    return [lbpParticipant[0], lbpParticipant[1].compensationWei.toString()]
  })

  const tree = StandardMerkleTree.of(merkleTreeValues, ["address", "uint256"])
  fs.writeFileSync('tree.json', JSON.stringify(tree.dump()))
}

void main()

function extractAddress(input: string): string {
  const regex = />(.*?)</; // Matches anything between ">" and "<"
  const match = input.match(regex);
  if (match && match[1]) {
      const addr = match[1]
      try {
        return getAddress(addr)
      } catch (error) {
        const index = addr.indexOf("0x")
        const fixedAddress = addr.slice(0, index + 2) + "00" + addr.slice(index + 2)

        return getAddress(fixedAddress)
      }

      // return addr
  } else {
    throw Error('Failed to extract for ' + input)
  }
}
