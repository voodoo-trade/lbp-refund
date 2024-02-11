# VMX refund snapshot

- VMX LBP participants are snapshotted from https://dune.com/gooddata_badguy/fjord-foundry-liquidity-bootstrapping-pool, https://dune.com/queries/3352049/5618727. he snapshot only considers participants who contributed to the raise by holding VMX till the end of the LBP.

- [compensation.json](/compensation.json) contains the list of wallet addresses, their VMX purchases in the LBP and refunds due in wei.

- The refund amount is increased to $0.11 from $0.10 per VMX purchased. LBP participants who sold after the LBP have been compensated at the same terms. The compensation table has been updated with new amounts at $0.11.

# Refund history

- The team used the https://multisend.co smart contract at [`0x941f40c2955ee09ba638409f67ef27c531fc055c`](https://etherscan.io/address/0x941f40c2955ee09ba638409f67ef27c531fc055c) to batch send ETH in batches of 20, in ascending order of refund amount.

- [refunds folder](/refunds/) contains transaction hashes of multisend transfers.

