import { Species } from '../interfaces/Specie';

export const SPECIES: { [species: string]: Species } = {
  pikachu: {
    name: 'Pikachu',
    type: ['electric'],
    stats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    abilities: ['static', 'lightning rod'],
    weight: 6
  },
  venusaur: {
    name: 'Venusaur',
    type: ['grass', 'poison'],
    stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    abilities: ['overgrow', 'chlorophyll'],
    weight: 100
  },
  charizard: {
    name: 'Charizard',
    type: ['fire', 'flying'],
    stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    abilities: ['blaze', 'solar power'],
    weight: 90.5
  },
  blastoise: {
    name: 'Blastoise',
    type: ['water'],
    stats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    abilities: ['torrent', 'rain dish'],
    weight: 85.5
  },
  jigglypuff: {
    name: 'Jigglypuff',
    type: ['normal', 'fairy'],
    stats: { hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20 },
    abilities: ['cute charm'],
    weight: 5.5
  },
  snorlax: {
    name: 'Snorlax',
    type: ['normal'],
    stats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
    abilities: ['immunity', 'thick fat', 'gluttony'],
    weight: 460
  },
  alakazam: {
    name: 'Alakazam',
    type: ['psychic'],
    stats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
    abilities: ['synchronize', 'inner focus', 'magic guard'],
    weight: 48
  },
  hitmonchan: {
    name: 'Hitmonchan',
    type: ['fighting'],
    stats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
    abilities: ['keen Eye', 'iron Fist', 'inner Focus'],
    weight: 50.2
  },
  gengar: {
    name: 'Gengar',
    type: ['ghost', 'poison'],
    stats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    abilities: ['cursed body'],
    weight: 40.5
  },
  scyther: {
    name: 'Scyther',
    type: ['bug', 'flying'],
    stats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 },
    abilities: ['swarm', 'technician', 'steadfast'],
    weight: 56
  },
  arcanine: {
    name: 'Arcanine',
    type: ['fire'],
    stats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
    abilities: ['intimidate', 'flash fire', 'justified'],
    weight: 155
  },
  lapras: {
    name: 'Lapras',
    type: ['water', 'ice'],
    stats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
    abilities: ['water absorb', 'shell Armor', 'hydration'],
    weight: 220
  },
  rhydon: {
    name: 'Rhydon',
    type: ['ground', 'rock'],
    stats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
    abilities: ['lightning rod', 'rock head', 'reckless'],
    weight: 120
  },
  tauros: {
    name: 'Tauros',
    type: ['normal'],
    stats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
    abilities: ['intimidate', 'anger point', 'sheer force'],
    weight: 88.4
  },
  dragonite: {
    name: 'Dragonite',
    type: ['dragon', 'flying'],
    stats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    abilities: ['inner focus', 'multiscale'],
    weight: 210
  }
};
