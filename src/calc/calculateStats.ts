/**
 * Stat calculation module.
 * Calculates new stats based on base stats.
 * @file calculateStats.ts
 * @author Dimitri Tsampiras
 * @since 1.0.0
 */
import { StatsTable, StatNameNoHp } from '../interfaces/misc';
import { Nature } from '../interfaces/Nature';

/**
 * Calculates the new stat. Not including hp.
 * @param b Base Stat.
 * @param e Ev (Effort Value) for stat.
 * @param nature Pokemon's nature.
 * @param stat Stat name.
 */
function statNoHpCalc(
  b: number,
  e: number,
  nature: Nature,
  stat: StatNameNoHp
): number {
  let n = 1;
  if (nature[0] == stat) n = 1.1;
  if (nature[1] == stat) n = 0.9;
  return Math.floor(Math.floor(((2 * b + e) * 50) / 100 + 5) * n);
}

function statHpCalc(b: number, e: number): number {
  return Math.floor(((2 * b + e) * 50) / 100 + 50 + 10);
}


export function calculateStats(
  stats: StatsTable,
  evs: StatsTable,
  nature: Nature
): StatsTable {
  const newStats: StatsTable = stats;
  for (const stat in stats) {
    if (stat == 'hp') newStats[stat] = statHpCalc(stats[stat], evs[stat]);
    else newStats[stat] = statNoHpCalc(stats[stat], evs[stat], nature, stat);
  }
  return newStats;
}
