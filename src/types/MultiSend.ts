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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface MultiSendInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "multiSendEther"
      | "multiSendToken"
      | "getBalance"
      | "calc_total"
      | "find"
      | "deposit"
      | "withdrawEther"
      | "withdrawToken"
      | "setSendTokenFee"
      | "setSendEthFee"
      | "destroy"
      | "owner"
      | "sendTokenFee"
      | "sendEthFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "multiSendEther",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiSendToken",
    values: [AddressLike, AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calc_total",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "find",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawEther",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendTokenFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendEthFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "destroy",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendTokenFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendEthFee",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "multiSendEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiSendToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "calc_total", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "find", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendTokenFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendEthFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendTokenFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendEthFee", data: BytesLike): Result;
}

export interface MultiSend extends BaseContract {
  connect(runner?: ContractRunner | null): MultiSend;
  waitForDeployment(): Promise<this>;

  interface: MultiSendInterface;

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

  multiSendEther: TypedContractMethod<
    [addresses: AddressLike[], amounts: BigNumberish[]],
    [boolean],
    "payable"
  >;

  multiSendToken: TypedContractMethod<
    [
      tokenAddress: AddressLike,
      addresses: AddressLike[],
      amounts: BigNumberish[]
    ],
    [boolean],
    "payable"
  >;

  getBalance: TypedContractMethod<[_address: AddressLike], [bigint], "view">;

  calc_total: TypedContractMethod<[numbs: BigNumberish[]], [bigint], "view">;

  find: TypedContractMethod<
    [numbs: BigNumberish[], n: BigNumberish],
    [bigint],
    "view"
  >;

  deposit: TypedContractMethod<[], [boolean], "payable">;

  withdrawEther: TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  withdrawToken: TypedContractMethod<
    [tokenAddress: AddressLike, _to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  setSendTokenFee: TypedContractMethod<
    [_sendTokenFee: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  setSendEthFee: TypedContractMethod<
    [_sendEthFee: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  destroy: TypedContractMethod<[_to: AddressLike], [void], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  sendTokenFee: TypedContractMethod<[], [bigint], "view">;

  sendEthFee: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "multiSendEther"
  ): TypedContractMethod<
    [addresses: AddressLike[], amounts: BigNumberish[]],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "multiSendToken"
  ): TypedContractMethod<
    [
      tokenAddress: AddressLike,
      addresses: AddressLike[],
      amounts: BigNumberish[]
    ],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[_address: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "calc_total"
  ): TypedContractMethod<[numbs: BigNumberish[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "find"
  ): TypedContractMethod<
    [numbs: BigNumberish[], n: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[], [boolean], "payable">;
  getFunction(
    nameOrSignature: "withdrawEther"
  ): TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawToken"
  ): TypedContractMethod<
    [tokenAddress: AddressLike, _to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSendTokenFee"
  ): TypedContractMethod<
    [_sendTokenFee: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSendEthFee"
  ): TypedContractMethod<[_sendEthFee: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "destroy"
  ): TypedContractMethod<[_to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sendTokenFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sendEthFee"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
