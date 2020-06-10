"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculates the new stat. Not including hp.
 * @param b Base Stat.
 * @param e Ev (Effort Value) for stat.
 * @param nature Pokemon's nature.
 * @param stat Stat name.
 * @return Numeric value of new stat.
 */
function statNoHpCalc(b, e, nature, stat) {
    var n = 1;
    if (nature[0] === stat)
        n = 1.1;
    if (nature[1] === stat)
        n = 0.9;
    return Math.floor(Math.floor(((2 * b + Math.floor(e / 4)) * 100) / 100 + 5) * n);
}
exports.statNoHpCalc = statNoHpCalc;
/**
 * Calculates the new hp value
 * @param b Base stat.
 * @param e Ev (Effort value) of hp.
 */
function statHpCalc(b, e) {
    return Math.floor(((2 * b + Math.floor(e / 4)) * 100) / 100 + 100 + 10);
}
exports.statHpCalc = statHpCalc;
/**
 *
 * @param stats All base stats.
 * @param evs Effort Value of all stats.
 * @param nature
 */
function calculateStats(stats, evs, nature) {
    var newStats = {};
    for (var stat in stats) {
        var index = stat;
        if (stat == 'hp')
            newStats[index] = statHpCalc(stats[index], evs[index]);
        else
            newStats[index] = statNoHpCalc(stats[index], evs[index], nature, stat);
    }
    return newStats;
}
exports.default = calculateStats;
//# sourceMappingURL=calculateStats.js.map