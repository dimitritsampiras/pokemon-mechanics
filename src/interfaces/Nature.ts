import { StatNameNoHp } from "./misc";

export type NatureName =
  | "adamant"
  | "bashful"
  | "bold"
  | "brave"
  | "calm"
  | "careful"
  | "docile"
  | "gentle"
  | "hardy"
  | "hasty"
  | "impish"
  | "jolly"
  | "lax"
  | "lonely"
  | "mild"
  | "modest"
  | "naive"
  | "naughty"
  | "quiet"
  | "quirky"
  | "rash"
  | "relaxed"
  | "sassy"
  | "serious"
  | "timid";

export interface Nature extends Array<StatNameNoHp> {
  0: StatNameNoHp;
  1: StatNameNoHp;
}