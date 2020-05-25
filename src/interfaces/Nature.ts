import { StatNameNoHp } from './misc';


export interface Nature extends Array<StatNameNoHp | undefined> {
  0: StatNameNoHp | undefined;
  1: StatNameNoHp | undefined;
}

export type NatureName =
  | 'adamant'
  | 'bashful'
  | 'bold'
  | 'brave'
  | 'calm'
  | 'careful'
  | 'docile'
  | 'gentle'
  | 'hardy'
  | 'hasty'
  | 'impish'
  | 'jolly'
  | 'lax'
  | 'lonely'
  | 'mild'
  | 'modest'
  | 'naive'
  | 'naughty'
  | 'quiet'
  | 'quirky'
  | 'rash'
  | 'relaxed'
  | 'sassy'
  | 'serious'
  | 'timid';