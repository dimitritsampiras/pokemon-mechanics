type StatNameNoHp = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type StatName = 'hp' | StatNameNoHp;
type StatusName = 'slp' | 'psn' | 'brn' | 'frz' | 'par' | 'tox';
type Weather =
  | 'sand'
  | 'sun'
  | 'rain'
  | 'hail'
  | 'harsh sunshine'
  | 'heavy rain'
  | 'strong winds';

type StatsTable<T = number> = {
  [stat in StatName]: T
};

type Evs<T = number> = {
  [stat in StatName]?: T
};


export { StatNameNoHp, StatusName, StatName, StatsTable, Evs };
