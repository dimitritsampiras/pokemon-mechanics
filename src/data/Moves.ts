/**
 * Move data set.
 * Consists of each move and their respective properties.
 * @file Natures.ts
 * @author Dimitri Tsampiras
 * @since 1.0.0
 */

import { Move } from '../interfaces/Move';

export const MOVES: { [name: string]: Move } = {
  /**
   * "If the target lost HP, the user takes recoil damage equal to 33%
   *  the HP lost by the target, rounded half up, but not less than 1 HP."
   */
  doubleedge: {
    name: 'Double Edge',
    type: 'normal',
    category: 'Physical',
    power: 100,
    accuracy: 120,
    pp: 15,
    desc: 'A reckless, life-risking tackle that also hurts the user a little.',
    recoil: 1 / 3
  },
  sleeppowder: {
    name: 'Sleep Powder',
    type: 'grass',
    category: 'Status',
    accuracy: 75,
    pp: 15,
    desc: 'A sleep-inducing dust is scattered in high volume around a foe.',
    effect: {
      status: 'slp'
    },
    charge: 1
  },
  /**
   * This attack charges on the first turn and executes on the second.
   * Power is halved if the weather is Hail, Primordial Sea, Rain Dance,
   * or Sandstorm and the user is not holding Utility Umbrella.
   * If the user is holding a Power Herb or the weather is Desolate
   * Land or Sunny Day, the move completes in one turn. If the user is holding
   * Utility Umbrella and the weather is Desolate Land or Sunny Day,
   * the move still requires a turn to charge.
   */
  solarbeam: {
    name: 'Solar Beam',
    type: 'grass',
    category: 'Special',
    power: 120,
    accuracy: 100,
    pp: 10,
    desc:
      'A 2-turn move that blasts the foe with absorbed energy in the 2nd turn.',
    charge: 1
  },
  /**
   * The user restores 1/2 of its maximum HP if Delta Stream or no weather
   * conditions are in effect or if the user is holding Utility Umbrella,
   * 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day,
   * and 1/4 of its maximum HP if the weather is Hail, Primordial Sea,
   * Rain Dance, or Sandstorm, all rounded half down.",
   */
  sythesis: {
    name: 'Sythesis',
    type: 'grass',
    category: 'Status',
    pp: 5,
    desc:
      'Restores the user’s HP. The amount of HP regained varies with the weather.',
    target: 'self'
  }
};
