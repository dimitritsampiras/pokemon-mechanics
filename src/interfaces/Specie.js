"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculateStats_1 = require("../calc/calculateStats");
var Species_1 = require("../data/Species");
var Natures_1 = require("../data/Natures");
var Pokemon = /** @class */ (function () {
    function Pokemon(specie, ability, nature, item, evs) {
        this.name = specie.name;
        this.type = specie.type;
        this.stats = calculateStats_1.default(specie.stats, evs, Natures_1.NATURES[nature]);
        this.ability = ability;
        this.item = item;
    }
    return Pokemon;
}());
var pikachu = new Pokemon(Species_1.SPECIES.venusaur, 'blaze', 'hardy', 'choice band', {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
});
//# sourceMappingURL=Specie.js.map