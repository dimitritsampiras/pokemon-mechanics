import { TypeName } from './Type';
import { StatNameNoHp, StatusName } from './misc';

export interface Move {
  readonly name: string;
  readonly type: TypeName;
  readonly category: MoveCategory;
  readonly power?: number;
  readonly accuracy?: number;
  readonly desc: string;
  readonly effect?: Effect;
  readonly priority?: number; // needs to be 5 -7
  pp: number;
  readonly charge?: number;
  readonly recoil?: number;
  readonly target?: 'self' | 'opp';
}

export interface Effect {
  readonly flinch?: boolean;
  readonly target?: 'usr' | 'opp';
  readonly stat?: {
    readonly stat: StatNameNoHp | StatNameNoHp[];
    readonly degree: 1 | 2;
    readonly raise: boolean;
  };
  readonly status: StatusName;
}

export type MoveCategory = 'Physical' | 'Special' | 'Status';
