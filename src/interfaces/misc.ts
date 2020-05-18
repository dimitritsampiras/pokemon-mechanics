type StatNameNoHp = "atk" | "def" | "spa" | "spd" | "spe";
type StatusName = "slp" | "psn" | "brn" | "frz" | "par" | "tox";

interface Stats {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
}

export { StatNameNoHp, StatusName, Stats };
