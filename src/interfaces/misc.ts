type StatNameNoHp = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type StatName = 'hp' & StatNameNoHp;
type StatusName = 'slp' | 'psn' | 'brn' | 'frz' | 'par' | 'tox';
type Weather =
  | 'Sand'
  | 'Sun'
  | 'Rain'
  | 'Hail'
  | 'Harsh Sunshine'
  | 'Heavy Rain'
  | 'Strong Winds';

type StatsTable<T = number> = {[stat in StatName]: T};

export { StatNameNoHp, StatusName, StatName, StatsTable };
