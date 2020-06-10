"use strict";
/**
 * Test driver for Calculate Stats
 * @file calculateStats.test.ts
 * @author Dimitri Tsampiras
 * @since 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var calculateStats_1 = require("../calc/calculateStats");
var Natures_1 = require("../data/Natures");
var baseStats = {
    hp: 80,
    atk: 82,
    def: 83,
    spa: 100,
    spd: 100,
    spe: 80
};
var baseEvs = {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
};
test('Single HP stat calulation.', function () {
    expect(calculateStats_1.statHpCalc(80, 0)).toBe(270);
    expect(calculateStats_1.statHpCalc(78, 0)).toBe(266);
});
test('Single stat calulation.', function () {
    expect(calculateStats_1.statNoHpCalc(82, 0, Natures_1.NATURES['hardy'], 'atk')).toBe(169);
    expect(calculateStats_1.statNoHpCalc(83, 252, Natures_1.NATURES['adamant'], 'def')).toBe(234);
});
test('New stats off base stats. Case 1', function () {
    var nature = Natures_1.NATURES['hardy'];
    expect(calculateStats_1.default(baseStats, baseEvs, nature)).toEqual({
        hp: 270,
        atk: 169,
        def: 171,
        spa: 205,
        spd: 205,
        spe: 165
    });
});
test('New stats off base stats. Case 2', function () {
    var evs = baseEvs;
    evs['hp'] = 252;
    evs['def'] = 252;
    evs['spd'] = 4;
    var nature = Natures_1.NATURES['brave'];
    expect(calculateStats_1.default(baseStats, evs, nature)).toEqual({
        hp: 333,
        atk: 185,
        def: 234,
        spa: 205,
        spd: 206,
        spe: 148
    });
});
test('New stats off base stats. Case 3', function () {
    var evs = baseEvs;
    evs['hp'] = 85;
    evs['atk'] = 85;
    evs['def'] = 85;
    evs['spa'] = 85;
    evs['spd'] = 85;
    evs['spe'] = 85;
    var nature = Natures_1.NATURES['careful'];
    expect(calculateStats_1.default(baseStats, evs, nature)).toEqual({
        hp: 291,
        atk: 190,
        def: 192,
        spa: 203,
        spd: 248,
        spe: 186
    });
});
//# sourceMappingURL=calculateStats.test.js.map