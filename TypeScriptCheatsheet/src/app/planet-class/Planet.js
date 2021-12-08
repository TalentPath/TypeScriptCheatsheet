"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
class Planet {
    constructor(name, size, parentStar) {
        this.name = name;
        this.size = size;
        this.parentStar = parentStar;
    }
    get planetName() {
        return this.name;
    }
    set newName(newValue) {
        this.name = newValue;
    }
}
exports.Planet = Planet;
Planet.listOfPlanets = [new Planet('Earth', 2000, 'Sol'), new Planet('Mars', 3000, 'Sol')];
Planet.inventoryCount = 2000000000;
Planet.purchasedPlanets = [];
