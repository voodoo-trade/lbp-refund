/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type PoolStruct = {
  asset: AddressLike;
  share: AddressLike;
  assets: BigNumberish;
  shares: BigNumberish;
  virtualAssets: BigNumberish;
  virtualShares: BigNumberish;
  weightStart: BigNumberish;
  weightEnd: BigNumberish;
  saleStart: BigNumberish;
  saleEnd: BigNumberish;
  totalPurchased: BigNumberish;
  maxSharePrice: BigNumberish;
};

export type PoolStructOutput = [
  asset: string,
  share: string,
  assets: bigint,
  shares: bigint,
  virtualAssets: bigint,
  virtualShares: bigint,
  weightStart: bigint,
  weightEnd: bigint,
  saleStart: bigint,
  saleEnd: bigint,
  totalPurchased: bigint,
  maxSharePrice: bigint
] & {
  asset: string;
  share: string;
  assets: bigint;
  shares: bigint;
  virtualAssets: bigint;
  virtualShares: bigint;
  weightStart: bigint;
  weightEnd: bigint;
  saleStart: bigint;
  saleEnd: bigint;
  totalPurchased: bigint;
  maxSharePrice: bigint;
};

export interface LiquidityBootstrapPoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "SABLIER"
      | "args"
      | "asset"
      | "close"
      | "closed"
      | "manager"
      | "maxSharePrice"
      | "maxTotalAssetsIn"
      | "maxTotalSharesOut"
      | "paused"
      | "platform"
      | "platformFee"
      | "previewAssetsIn"
      | "previewAssetsOut"
      | "previewSharesIn"
      | "previewSharesOut"
      | "purchasedShares"
      | "redeem"
      | "redeemedShares"
      | "referredAssets"
      | "referrerFee"
      | "reservesAndWeights"
      | "saleEnd"
      | "saleStart"
      | "sellingAllowed"
      | "share"
      | "swapAssetsForExactShares(uint256,uint256,address,address,bytes32[])"
      | "swapAssetsForExactShares(uint256,uint256,address)"
      | "swapAssetsForExactShares(uint256,uint256,address,address)"
      | "swapExactAssetsForShares(uint256,uint256,address)"
      | "swapExactAssetsForShares(uint256,uint256,address,address)"
      | "swapExactAssetsForShares(uint256,uint256,address,address,bytes32[])"
      | "swapExactSharesForAssets(uint256,uint256,address)"
      | "swapExactSharesForAssets(uint256,uint256,address,bytes32[])"
      | "swapFee"
      | "swapSharesForExactAssets(uint256,uint256,address)"
      | "swapSharesForExactAssets(uint256,uint256,address,bytes32[])"
      | "togglePause"
      | "totalPurchased"
      | "totalReferred"
      | "totalSwapFeesAsset"
      | "totalSwapFeesShare"
      | "vestCliff"
      | "vestEnd"
      | "vestShares"
      | "virtualAssets"
      | "virtualShares"
      | "weightEnd"
      | "weightStart"
      | "whitelistMerkleRoot"
      | "whitelisted"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Buy" | "Close" | "Paused" | "Redeem" | "Sell"
  ): EventFragment;

  encodeFunctionData(functionFragment: "SABLIER", values?: undefined): string;
  encodeFunctionData(functionFragment: "args", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(functionFragment: "close", values?: undefined): string;
  encodeFunctionData(functionFragment: "closed", values?: undefined): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxSharePrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTotalAssetsIn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTotalSharesOut",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "platform", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "platformFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "previewAssetsIn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewAssetsOut",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewSharesIn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewSharesOut",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "purchasedShares",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemedShares",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "referredAssets",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "referrerFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reservesAndWeights",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "saleEnd", values?: undefined): string;
  encodeFunctionData(functionFragment: "saleStart", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sellingAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "share", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapAssetsForExactShares(uint256,uint256,address,address,bytes32[])",
    values: [BigNumberish, BigNumberish, AddressLike, AddressLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAssetsForExactShares(uint256,uint256,address)",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAssetsForExactShares(uint256,uint256,address,address)",
    values: [BigNumberish, BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactAssetsForShares(uint256,uint256,address)",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactAssetsForShares(uint256,uint256,address,address)",
    values: [BigNumberish, BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactAssetsForShares(uint256,uint256,address,address,bytes32[])",
    values: [BigNumberish, BigNumberish, AddressLike, AddressLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactSharesForAssets(uint256,uint256,address)",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactSharesForAssets(uint256,uint256,address,bytes32[])",
    values: [BigNumberish, BigNumberish, AddressLike, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "swapFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapSharesForExactAssets(uint256,uint256,address)",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapSharesForExactAssets(uint256,uint256,address,bytes32[])",
    values: [BigNumberish, BigNumberish, AddressLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "togglePause",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalPurchased",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalReferred",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSwapFeesAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSwapFeesShare",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vestCliff", values?: undefined): string;
  encodeFunctionData(functionFragment: "vestEnd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vestShares",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "virtualAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "virtualShares",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "weightEnd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "weightStart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistMerkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whitelisted",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "SABLIER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "args", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "closed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxSharePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTotalAssetsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTotalSharesOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "platform", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewAssetsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewAssetsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewSharesIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewSharesOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchasedShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemedShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referredAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referrerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reservesAndWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saleEnd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "saleStart", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellingAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "share", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapAssetsForExactShares(uint256,uint256,address,address,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapAssetsForExactShares(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapAssetsForExactShares(uint256,uint256,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactAssetsForShares(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactAssetsForShares(uint256,uint256,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactAssetsForShares(uint256,uint256,address,address,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactSharesForAssets(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactSharesForAssets(uint256,uint256,address,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapSharesForExactAssets(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapSharesForExactAssets(uint256,uint256,address,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "togglePause",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalPurchased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReferred",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSwapFeesAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSwapFeesShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vestCliff", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vestEnd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vestShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "virtualAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "virtualShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weightEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "weightStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelisted",
    data: BytesLike
  ): Result;
}

export namespace BuyEvent {
  export type InputTuple = [
    caller: AddressLike,
    assets: BigNumberish,
    shares: BigNumberish,
    swapFee: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    assets: bigint,
    shares: bigint,
    swapFee: bigint
  ];
  export interface OutputObject {
    caller: string;
    assets: bigint;
    shares: bigint;
    swapFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CloseEvent {
  export type InputTuple = [
    assets: BigNumberish,
    platformFees: BigNumberish,
    swapFeesAsset: BigNumberish,
    swapFeesShare: BigNumberish
  ];
  export type OutputTuple = [
    assets: bigint,
    platformFees: bigint,
    swapFeesAsset: bigint,
    swapFeesShare: bigint
  ];
  export interface OutputObject {
    assets: bigint;
    platformFees: bigint;
    swapFeesAsset: bigint;
    swapFeesShare: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [arg0: boolean];
  export type OutputTuple = [arg0: boolean];
  export interface OutputObject {
    arg0: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RedeemEvent {
  export type InputTuple = [
    caller: AddressLike,
    streamID: BigNumberish,
    shares: BigNumberish
  ];
  export type OutputTuple = [caller: string, streamID: bigint, shares: bigint];
  export interface OutputObject {
    caller: string;
    streamID: bigint;
    shares: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SellEvent {
  export type InputTuple = [
    caller: AddressLike,
    shares: BigNumberish,
    assets: BigNumberish,
    swapFee: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    shares: bigint,
    assets: bigint,
    swapFee: bigint
  ];
  export interface OutputObject {
    caller: string;
    shares: bigint;
    assets: bigint;
    swapFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface LiquidityBootstrapPool extends BaseContract {
  connect(runner?: ContractRunner | null): LiquidityBootstrapPool;
  waitForDeployment(): Promise<this>;

  interface: LiquidityBootstrapPoolInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  SABLIER: TypedContractMethod<[], [string], "view">;

  args: TypedContractMethod<[], [PoolStructOutput], "view">;

  asset: TypedContractMethod<[], [string], "view">;

  close: TypedContractMethod<[], [void], "nonpayable">;

  closed: TypedContractMethod<[], [boolean], "view">;

  manager: TypedContractMethod<[], [string], "view">;

  maxSharePrice: TypedContractMethod<[], [bigint], "view">;

  maxTotalAssetsIn: TypedContractMethod<[], [bigint], "view">;

  maxTotalSharesOut: TypedContractMethod<[], [bigint], "view">;

  paused: TypedContractMethod<[], [boolean], "view">;

  platform: TypedContractMethod<[], [string], "view">;

  platformFee: TypedContractMethod<[], [bigint], "view">;

  previewAssetsIn: TypedContractMethod<
    [sharesOut: BigNumberish],
    [bigint],
    "view"
  >;

  previewAssetsOut: TypedContractMethod<
    [sharesIn: BigNumberish],
    [bigint],
    "view"
  >;

  previewSharesIn: TypedContractMethod<
    [assetsOut: BigNumberish],
    [bigint],
    "view"
  >;

  previewSharesOut: TypedContractMethod<
    [assetsIn: BigNumberish],
    [bigint],
    "view"
  >;

  purchasedShares: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  redeem: TypedContractMethod<
    [recipient: AddressLike, referred: boolean],
    [bigint],
    "nonpayable"
  >;

  redeemedShares: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  referredAssets: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  referrerFee: TypedContractMethod<[], [bigint], "view">;

  reservesAndWeights: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        assetReserve: bigint;
        shareReserve: bigint;
        assetWeight: bigint;
        shareWeight: bigint;
      }
    ],
    "view"
  >;

  saleEnd: TypedContractMethod<[], [bigint], "view">;

  saleStart: TypedContractMethod<[], [bigint], "view">;

  sellingAllowed: TypedContractMethod<[], [boolean], "view">;

  share: TypedContractMethod<[], [string], "view">;

  "swapAssetsForExactShares(uint256,uint256,address,address,bytes32[])": TypedContractMethod<
    [
      sharesOut: BigNumberish,
      maxAssetsIn: BigNumberish,
      recipient: AddressLike,
      referrer: AddressLike,
      proof: BytesLike[]
    ],
    [bigint],
    "nonpayable"
  >;

  "swapAssetsForExactShares(uint256,uint256,address)": TypedContractMethod<
    [
      sharesOut: BigNumberish,
      maxAssetsIn: BigNumberish,
      recipient: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  "swapAssetsForExactShares(uint256,uint256,address,address)": TypedContractMethod<
    [
      sharesOut: BigNumberish,
      maxAssetsIn: BigNumberish,
      recipient: AddressLike,
      referrer: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  "swapExactAssetsForShares(uint256,uint256,address)": TypedContractMethod<
    [
      assetsIn: BigNumberish,
      minSharesOut: BigNumberish,
      recipient: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  "swapExactAssetsForShares(uint256,uint256,address,address)": TypedContractMethod<
    [
      assetsIn: BigNumberish,
      minSharesOut: BigNumberish,
      recipient: AddressLike,
      referrer: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  "swapExactAssetsForShares(uint256,uint256,address,address,bytes32[])": TypedContractMethod<
    [
      assetsIn: BigNumberish,
      minSharesOut: BigNumberish,
      recipient: AddressLike,
      referrer: AddressLike,
      proof: BytesLike[]
    ],
    [bigint],
    "nonpayable"
  >;

  "swapExactSharesForAssets(uint256,uint256,address)": TypedContractMethod<
    [
      sharesIn: BigNumberish,
      minAssetsOut: BigNumberish,
      recipient: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  "swapExactSharesForAssets(uint256,uint256,address,bytes32[])": TypedContractMethod<
    [
      sharesIn: BigNumberish,
      minAssetsOut: BigNumberish,
      recipient: AddressLike,
      proof: BytesLike[]
    ],
    [bigint],
    "nonpayable"
  >;

  swapFee: TypedContractMethod<[], [bigint], "view">;

  "swapSharesForExactAssets(uint256,uint256,address)": TypedContractMethod<
    [
      assetsOut: BigNumberish,
      maxSharesIn: BigNumberish,
      recipient: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  "swapSharesForExactAssets(uint256,uint256,address,bytes32[])": TypedContractMethod<
    [
      assetsOut: BigNumberish,
      maxSharesIn: BigNumberish,
      recipient: AddressLike,
      proof: BytesLike[]
    ],
    [bigint],
    "nonpayable"
  >;

  togglePause: TypedContractMethod<[], [void], "nonpayable">;

  totalPurchased: TypedContractMethod<[], [bigint], "view">;

  totalReferred: TypedContractMethod<[], [bigint], "view">;

  totalSwapFeesAsset: TypedContractMethod<[], [bigint], "view">;

  totalSwapFeesShare: TypedContractMethod<[], [bigint], "view">;

  vestCliff: TypedContractMethod<[], [bigint], "view">;

  vestEnd: TypedContractMethod<[], [bigint], "view">;

  vestShares: TypedContractMethod<[], [boolean], "view">;

  virtualAssets: TypedContractMethod<[], [bigint], "view">;

  virtualShares: TypedContractMethod<[], [bigint], "view">;

  weightEnd: TypedContractMethod<[], [bigint], "view">;

  weightStart: TypedContractMethod<[], [bigint], "view">;

  whitelistMerkleRoot: TypedContractMethod<[], [string], "view">;

  whitelisted: TypedContractMethod<[], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "SABLIER"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "args"
  ): TypedContractMethod<[], [PoolStructOutput], "view">;
  getFunction(
    nameOrSignature: "asset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "close"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "closed"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "manager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "maxSharePrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxTotalAssetsIn"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxTotalSharesOut"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "platform"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "platformFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "previewAssetsIn"
  ): TypedContractMethod<[sharesOut: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "previewAssetsOut"
  ): TypedContractMethod<[sharesIn: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "previewSharesIn"
  ): TypedContractMethod<[assetsOut: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "previewSharesOut"
  ): TypedContractMethod<[assetsIn: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "purchasedShares"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "redeem"
  ): TypedContractMethod<
    [recipient: AddressLike, referred: boolean],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeemedShares"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "referredAssets"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "referrerFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "reservesAndWeights"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        assetReserve: bigint;
        shareReserve: bigint;
        assetWeight: bigint;
        shareWeight: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "saleEnd"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "saleStart"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sellingAllowed"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "share"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "swapAssetsForExactShares(uint256,uint256,address,address,bytes32[])"
  ): TypedContractMethod<
    [
      sharesOut: BigNumberish,
      maxAssetsIn: BigNumberish,
      recipient: AddressLike,
      referrer: AddressLike,
      proof: BytesLike[]
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapAssetsForExactShares(uint256,uint256,address)"
  ): TypedContractMethod<
    [
      sharesOut: BigNumberish,
      maxAssetsIn: BigNumberish,
      recipient: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapAssetsForExactShares(uint256,uint256,address,address)"
  ): TypedContractMethod<
    [
      sharesOut: BigNumberish,
      maxAssetsIn: BigNumberish,
      recipient: AddressLike,
      referrer: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactAssetsForShares(uint256,uint256,address)"
  ): TypedContractMethod<
    [
      assetsIn: BigNumberish,
      minSharesOut: BigNumberish,
      recipient: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactAssetsForShares(uint256,uint256,address,address)"
  ): TypedContractMethod<
    [
      assetsIn: BigNumberish,
      minSharesOut: BigNumberish,
      recipient: AddressLike,
      referrer: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactAssetsForShares(uint256,uint256,address,address,bytes32[])"
  ): TypedContractMethod<
    [
      assetsIn: BigNumberish,
      minSharesOut: BigNumberish,
      recipient: AddressLike,
      referrer: AddressLike,
      proof: BytesLike[]
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactSharesForAssets(uint256,uint256,address)"
  ): TypedContractMethod<
    [
      sharesIn: BigNumberish,
      minAssetsOut: BigNumberish,
      recipient: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactSharesForAssets(uint256,uint256,address,bytes32[])"
  ): TypedContractMethod<
    [
      sharesIn: BigNumberish,
      minAssetsOut: BigNumberish,
      recipient: AddressLike,
      proof: BytesLike[]
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "swapSharesForExactAssets(uint256,uint256,address)"
  ): TypedContractMethod<
    [
      assetsOut: BigNumberish,
      maxSharesIn: BigNumberish,
      recipient: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapSharesForExactAssets(uint256,uint256,address,bytes32[])"
  ): TypedContractMethod<
    [
      assetsOut: BigNumberish,
      maxSharesIn: BigNumberish,
      recipient: AddressLike,
      proof: BytesLike[]
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "togglePause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalPurchased"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalReferred"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSwapFeesAsset"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSwapFeesShare"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "vestCliff"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "vestEnd"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "vestShares"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "virtualAssets"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "virtualShares"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "weightEnd"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "weightStart"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "whitelistMerkleRoot"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "whitelisted"
  ): TypedContractMethod<[], [boolean], "view">;

  getEvent(
    key: "Buy"
  ): TypedContractEvent<
    BuyEvent.InputTuple,
    BuyEvent.OutputTuple,
    BuyEvent.OutputObject
  >;
  getEvent(
    key: "Close"
  ): TypedContractEvent<
    CloseEvent.InputTuple,
    CloseEvent.OutputTuple,
    CloseEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "Redeem"
  ): TypedContractEvent<
    RedeemEvent.InputTuple,
    RedeemEvent.OutputTuple,
    RedeemEvent.OutputObject
  >;
  getEvent(
    key: "Sell"
  ): TypedContractEvent<
    SellEvent.InputTuple,
    SellEvent.OutputTuple,
    SellEvent.OutputObject
  >;

  filters: {
    "Buy(address,uint256,uint256,uint256)": TypedContractEvent<
      BuyEvent.InputTuple,
      BuyEvent.OutputTuple,
      BuyEvent.OutputObject
    >;
    Buy: TypedContractEvent<
      BuyEvent.InputTuple,
      BuyEvent.OutputTuple,
      BuyEvent.OutputObject
    >;

    "Close(uint256,uint256,uint256,uint256)": TypedContractEvent<
      CloseEvent.InputTuple,
      CloseEvent.OutputTuple,
      CloseEvent.OutputObject
    >;
    Close: TypedContractEvent<
      CloseEvent.InputTuple,
      CloseEvent.OutputTuple,
      CloseEvent.OutputObject
    >;

    "Paused(bool)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "Redeem(address,uint256,uint256)": TypedContractEvent<
      RedeemEvent.InputTuple,
      RedeemEvent.OutputTuple,
      RedeemEvent.OutputObject
    >;
    Redeem: TypedContractEvent<
      RedeemEvent.InputTuple,
      RedeemEvent.OutputTuple,
      RedeemEvent.OutputObject
    >;

    "Sell(address,uint256,uint256,uint256)": TypedContractEvent<
      SellEvent.InputTuple,
      SellEvent.OutputTuple,
      SellEvent.OutputObject
    >;
    Sell: TypedContractEvent<
      SellEvent.InputTuple,
      SellEvent.OutputTuple,
      SellEvent.OutputObject
    >;
  };
}
