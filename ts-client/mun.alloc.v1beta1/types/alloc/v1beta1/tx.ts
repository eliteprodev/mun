/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "mun.alloc.v1beta1";

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  startTime: number;
  endTime: number;
  delayed: boolean;
}

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponse {}

/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPool {
  sender: string;
  amount: Coin[];
}

/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponse {}

const baseMsgCreateVestingAccount: object = {
  fromAddress: "",
  toAddress: "",
  startTime: 0,
  endTime: 0,
  delayed: false,
};

export const MsgCreateVestingAccount = {
  encode(
    message: MsgCreateVestingAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTime !== 0) {
      writer.uint32(32).int64(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(40).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(48).bool(message.delayed);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.startTime = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.endTime = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVestingAccount {
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Number(object.startTime);
    } else {
      message.startTime = 0;
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Number(object.endTime);
    } else {
      message.endTime = 0;
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = Boolean(object.delayed);
    } else {
      message.delayed = false;
    }
    return message;
  },

  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.endTime !== undefined && (obj.endTime = message.endTime);
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateVestingAccount>
  ): MsgCreateVestingAccount {
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = 0;
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime;
    } else {
      message.endTime = 0;
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = object.delayed;
    } else {
      message.delayed = false;
    }
    return message;
  },
};

const baseMsgCreateVestingAccountResponse: object = {};

export const MsgCreateVestingAccountResponse = {
  encode(
    _: MsgCreateVestingAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateVestingAccountResponse {
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
    return message;
  },

  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateVestingAccountResponse>
  ): MsgCreateVestingAccountResponse {
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
    return message;
  },
};

const baseMsgFundFairburnPool: object = { sender: "" };

export const MsgFundFairburnPool = {
  encode(
    message: MsgFundFairburnPool,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFundFairburnPool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundFairburnPool } as MsgFundFairburnPool;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundFairburnPool {
    const message = { ...baseMsgFundFairburnPool } as MsgFundFairburnPool;
    message.amount = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgFundFairburnPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFundFairburnPool>): MsgFundFairburnPool {
    const message = { ...baseMsgFundFairburnPool } as MsgFundFairburnPool;
    message.amount = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgFundFairburnPoolResponse: object = {};

export const MsgFundFairburnPoolResponse = {
  encode(
    _: MsgFundFairburnPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgFundFairburnPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgFundFairburnPoolResponse,
    } as MsgFundFairburnPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgFundFairburnPoolResponse {
    const message = {
      ...baseMsgFundFairburnPoolResponse,
    } as MsgFundFairburnPoolResponse;
    return message;
  },

  toJSON(_: MsgFundFairburnPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgFundFairburnPoolResponse>
  ): MsgFundFairburnPoolResponse {
    const message = {
      ...baseMsgFundFairburnPoolResponse,
    } as MsgFundFairburnPoolResponse;
    return message;
  },
};

/** Msg defines the alloc Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  CreateVestingAccount(
    request: MsgCreateVestingAccount
  ): Promise<MsgCreateVestingAccountResponse>;
  /**
   * FundFairburnPool defines a method to allow an account to directly
   * fund the fee collector module account.
   */
  FundFairburnPool(
    request: MsgFundFairburnPool
  ): Promise<MsgFundFairburnPoolResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateVestingAccount(
    request: MsgCreateVestingAccount
  ): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request(
      "mun.alloc.v1beta1.Msg",
      "CreateVestingAccount",
      data
    );
    return promise.then((data) =>
      MsgCreateVestingAccountResponse.decode(new Reader(data))
    );
  }

  FundFairburnPool(
    request: MsgFundFairburnPool
  ): Promise<MsgFundFairburnPoolResponse> {
    const data = MsgFundFairburnPool.encode(request).finish();
    const promise = this.rpc.request(
      "mun.alloc.v1beta1.Msg",
      "FundFairburnPool",
      data
    );
    return promise.then((data) =>
      MsgFundFairburnPoolResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
