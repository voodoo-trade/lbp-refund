import * as dotenv from 'dotenv'
import { ethers, getAddress } from 'ethers'
import { Vyper_contract__factory } from './types'

dotenv.config()

export const provider = new ethers.JsonRpcProvider(process.env.RPC)

export const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider)

// multisend.co
export const multisend = Vyper_contract__factory.connect(
  '0x941f40c2955ee09ba638409f67ef27c531fc055c',
  signer
)
