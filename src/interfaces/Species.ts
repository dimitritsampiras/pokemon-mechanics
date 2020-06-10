/**
 * Species and Pokemon interface and class.
 * @file Specie.ts
 * @author Dimitri Tsampiras
 * @since 1.0.0
 */

import { StatsTable } from './misc';
import { Move } from './Move';
import { NatureName } from './Nature';
import { TypeName } from './Type';
import { AbilityName } from './Ability';
import calculateStats from '../calc/calculateStats';
import { NATURES } from '../data/Natures';

/**
 * Species interface.
 */
export interface Species {
  readonly name: string;
  readonly type: [TypeName] | [TypeName, TypeName];
  readonly stats: StatsTable;
  readonly availableMoves?: Move[];
  readonly abilities: AbilityName[];
  readonly weight: number;
}

/**
 * Pokemon class.
 */
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
