import { StatsTable } from './misc';
import { Move } from './Move';
import { Nature, NatureName } from './Nature';
import { TypeName } from './Type';
import { Ability, AbilityName } from './Ability';
import calculateStats from '../calc/calculateStats';
import { SPECIES } from '../data/Species';
import { NATURES } from '../data/Natures';

export interface Specie {
  readonly name: string;
  readonly type: [TypeName] | [TypeName, TypeName];
  readonly stats: StatsTable;
  readonly availableMoves?: Move[];
  readonly abilities: [string, string];
  readonly weight: number;
}

class Pokemon {
  readonly name: string;
  readonly type: [TypeName] | [TypeName, TypeName];
  readonly stats: StatsTable;
  readonly ability: AbilityName;
  readonly item: ItemName;

  public constructor(
    specie: Specie,
    ability: AbilityName,
    nature: NatureName,
    item: ItemName,
    evs: StatsTable
  ) {
    this.name = specie.name;
    this.type = specie.type;
    this.stats = calculateStats(specie.stats, evs, NATURES[nature]);
    this.ability = ability;
    this.item = item;
  }
}

const pikachu: Pokemon = new Pokemon(
  SPECIES.venusaur,
  'blaze',
  'hardy',
  'choice band',
  {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  }
);
