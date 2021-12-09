"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
class RockyPlanet extends Planet_1.Planet {
    constructor(name, size, parentStar, coreComponents) {
        super(name, size, parentStar);
        this.coreComponents = coreComponents;
    }
    get coreComp() {
        return this.coreComponents.join(', ');
    }
}
exports.default = RockyPlanet;
