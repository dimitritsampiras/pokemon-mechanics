import { StatsTable } from './misc';
import { Move } from './Move';
import { Nature } from './Nature';
import { TypeName } from './Type';

export interface Specie {
  readonly name: string;
  readonly type: [TypeName] | [TypeName, TypeName];
  readonly stats: StatsTable;
  readonly availableMoves?: Move[];
  readonly abilities: [string, string];
  readonly weight: number;
}

class Pokemon {
  private name: string;
  private type: [TypeName] | [TypeName, TypeName];
  private stats: StatsTable;

  public constructor(
    specie: Specie,
    ability: Ability,
    nature: Nature,
    evs: Evs
  ) {
    this.name = specie.name;
    this.type = specie.type;
    this.stats = calculateStats(specie.stats, nature);
  }
}

