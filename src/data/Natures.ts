/**
 * Nature data set.
 * Consists of each nature and their effects.
 * @file Natures.ts
 * @author Dimitri Tsampiras
 * @since 1.0.0
 */

import * as I from '../interfaces/Nature';

export const NATURES: { [nature: string]: I.Nature } = {
  Adamant: ['atk', 'spa'],
  Bashful: ['spa', 'spa'],
  Bold: ['def', 'atk'],
  Brave: ['atk', 'spe'],
  Calm: ['spd', 'atk'],
  Careful: ['spd', 'spa'],
  Docile: ['def', 'def'],
  Gentle: ['spd', 'def'],
  Hardy: ['atk', 'atk'],
  Hasty: ['spe', 'def'],
  Impish: ['def', 'spa'],
  Jolly: ['spe', 'spa'],
  Lax: ['def', 'spd'],
  Lonely: ['atk', 'def'],
  Mild: ['spa', 'def'],
  Modest: ['spa', 'atk'],
  Naive: ['spe', 'spd'],
  Naughty: ['atk', 'spd'],
  Quiet: ['spa', 'spe'],
  Quirky: ['spd', 'spd'],
  Rash: ['spa', 'spd'],
  Relaxed: ['def', 'spe'],
  Sassy: ['spd', 'spe'],
  Serious: ['spe', 'spe'],
  Timid: ['spe', 'atk']
};
