/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "mun.claim.v1beta1";

export enum Action {
  ActionInitialClaim = 0,
  ActionDelegateStake = 1,
  ActionVote = 2,
  ActionSwap = 3,
  UNRECOGNIZED = -1,
}

export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionInitialClaim":
      return Action.ActionInitialClaim;
    case 1:
    case "ActionDelegateStake":
      return Action.ActionDelegateStake;
    case 2:
    case "ActionVote":
      return Action.ActionVote;
    case 3:
    case "ActionSwap":
      return Action.ActionSwap;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}

export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionInitialClaim:
      return "ActionInitialClaim";
    case Action.ActionDelegateStake:
      return "ActionDelegateStake";
    case Action.ActionVote:
      return "ActionVote";
    case Action.ActionSwap:
      return "ActionSwap";
    default:
      return "UNKNOWN";
  }
}

export interface ClaimRecord {
  /** address of claim user */
  address: string;
  /** total initial claimable amount for the user */
  initial_claimable_amount: Coin[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  action_completed: boolean[];
  /**
   * true if action is ready to claim
   * index of bool in array refers to action enum #
   */
  action_ready: boolean[];
}

const baseClaimRecord: object = {
  address: "",
  action_completed: false,
  action_ready: false,
};

export const ClaimRecord = {
  encode(message: ClaimRecord, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.initial_claimable_amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.action_completed) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.action_ready) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClaimRecord } as ClaimRecord;
    message.initial_claimable_amount = [];
    message.action_completed = [];
    message.action_ready = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.initial_claimable_amount.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.action_completed.push(reader.bool());
            }
          } else {
            message.action_completed.push(reader.bool());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.action_ready.push(reader.bool());
            }
          } else {
            message.action_ready.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimRecord {
    const message = { ...baseClaimRecord } as ClaimRecord;
    message.initial_claimable_amount = [];
    message.action_completed = [];
    message.action_ready = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (
      object.initial_claimable_amount !== undefined &&
      object.initial_claimable_amount !== null
    ) {
      for (const e of object.initial_claimable_amount) {
        message.initial_claimable_amount.push(Coin.fromJSON(e));
      }
    }
    if (
      object.action_completed !== undefined &&
      object.action_completed !== null
    ) {
      for (const e of object.action_completed) {
        message.action_completed.push(Boolean(e));
      }
    }
    if (object.action_ready !== undefined && object.action_ready !== null) {
      for (const e of object.action_ready) {
        message.action_ready.push(Boolean(e));
      }
    }
    return message;
  },

  toJSON(message: ClaimRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.initial_claimable_amount) {
      obj.initial_claimable_amount = message.initial_claimable_amount.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.initial_claimable_amount = [];
    }
    if (message.action_completed) {
      obj.action_completed = message.action_completed.map((e) => e);
    } else {
      obj.action_completed = [];
    }
    if (message.action_ready) {
      obj.action_ready = message.action_ready.map((e) => e);
    } else {
      obj.action_ready = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = { ...baseClaimRecord } as ClaimRecord;
    message.initial_claimable_amount = [];
    message.action_completed = [];
    message.action_ready = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (
      object.initial_claimable_amount !== undefined &&
      object.initial_claimable_amount !== null
    ) {
      for (const e of object.initial_claimable_amount) {
        message.initial_claimable_amount.push(Coin.fromPartial(e));
      }
    }
    if (
      object.action_completed !== undefined &&
      object.action_completed !== null
    ) {
      for (const e of object.action_completed) {
        message.action_completed.push(e);
      }
    }
    if (object.action_ready !== undefined && object.action_ready !== null) {
      for (const e of object.action_ready) {
        message.action_ready.push(e);
      }
    }
    return message;
  },
};

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
