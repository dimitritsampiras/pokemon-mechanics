import { Stats } from "./misc";
import { Move } from "./Move";
import { Nature } from "./Nature";
import { TypeName } from "./Type";


export interface Specie {
  readonly name: string;
  readonly types: [TypeName] | [TypeName, TypeName];
  readonly stats: Stats;
  readonly moves: Move[]
  readonly nature: Nature;

  readonly abilities?: Ability;
}