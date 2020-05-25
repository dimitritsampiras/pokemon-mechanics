import { Specie } from '../interfaces/Specie';

export const SPECIES: { [specie: string]: Specie } = {
  venusaur: {
    name: 'Venusaur',
    type: ['grass', 'poison'],
    stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    abilities: ['Overgrow', 'Chlorophyll'],
    weight: 100
  }
};
