# VMX refund snapshot

Snapshot will take place using a merkle airdrop contract on Base.

## File structure

This repo contains

- [snapshot.json](/snapshot.json): Amounts to refund by account

- [CSV snapshots](/snapshots/)
  - Fjord snapshot is taken from Dune analytics
  - VMX balances were snapshotted on 8th Feb, 4:35 pm UTC.

## Refund plan

Out of 40M VMX sold

- 14M were with holders
  - Swap for a fixed rate

- 26M were sold or in the LBP
  - Those who sold get ETH, without having to redeem
  - For tokens that are still in the LBP, it is impossible to wait for all tokens to get redeemed. These holders get ETH at a fixed rate, without having to redeem. The VMX still in the LBP can be sold in the market, making their deal similar to panic sellers.

# Invalid addresses

Spurious addresses returned from Dune. They have neglibible buys so can be ignored.

```
<a href=https://debank.com/profile/0x4190ba9deb85f8cf70d18310636b3c5ba2ddbd target=_blank">0x4190ba9deb85f8cf70d18310636b3c5ba2ddbd</a> 24501.0662274343
<a href=https://debank.com/profile/0x1b574534ebd178ae17647587e8f6fea243135b target=_blank">0x1b574534ebd178ae17647587e8f6fea243135b</a> 16655.554079058198
<a href=https://debank.com/profile/0xd21d415a9664b87f8d8d4c46ad866a6d8475cd target=_blank">0xd21d415a9664b87f8d8d4c46ad866a6d8475cd</a> 12188.81041131431
<a href=https://debank.com/profile/0xe8281fbef8e201f8313ebb853bad3325d383ac target=_blank">0xe8281fbef8e201f8313ebb853bad3325d383ac</a> 8274.850201238183
<a href=https://debank.com/profile/0x324d6fdbaa17b1a5256f396319d513aefbbacf target=_blank">0x324d6fdbaa17b1a5256f396319d513aefbbacf</a> 7540.017203417543
<a href=https://debank.com/profile/0xba5748c6094017e30698ae7adebb8d8ea99879 target=_blank">0xba5748c6094017e30698ae7adebb8d8ea99879</a> 2662.8179861816093
<a href=https://debank.com/profile/0x14c49e3bb2b70807a3417509670d1d821b9997 target=_blank">0x14c49e3bb2b70807a3417509670d1d821b9997</a> 2467.0859583265014
<a href=https://debank.com/profile/0x9a285a604f23d7548ce16c3b214234c523d2af target=_blank">0x9a285a604f23d7548ce16c3b214234c523d2af</a> 2124.3127394689836
<a href=https://debank.com/profile/0x94b031455a1e68532de5c455fd1e088fe793f9 target=_blank">0x94b031455a1e68532de5c455fd1e088fe793f9</a> 689.7954655318325
```