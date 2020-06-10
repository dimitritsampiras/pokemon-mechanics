import { StatsTable } from './misc';
import { Move } from './Move';
import { Nature, NatureName } from './Nature';
import { TypeName } from './Type';
import { Ability, AbilityName } from './Ability';
import calculateStats from '../calc/calculateStats';
import { SPECIES } from '../data/Species';
import { NATURES } from '../data/Natures';

export interface Species {
  readonly name: string;
  readonly type: [TypeName] | [TypeName, TypeName];
  readonly stats: StatsTable;
  readonly availableMoves?: Move[];
  readonly abilities: AbilityName[];
  readonly weight: number;
}

class Pokemon {
  readonly name: string;
  readonly type: [TypeName] | [TypeName, TypeName];
  readonly stats: StatsTable;
  readonly ability: AbilityName;
  readonly item: ItemName;

  public constructor(
    species: Species,
    ability: AbilityName,
    nature: NatureName,
    item: ItemName,
    evs: StatsTable
  ) {
    this.name = species.name;
    this.type = species.type;
    this.stats = calculateStats(species.stats, evs, NATURES[nature]);
    this.ability = ability;
    this.item = item;
  }
}
