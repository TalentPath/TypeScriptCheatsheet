"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
class IceGiant extends Planet_1.Planet {
    constructor(name, size, parentStar, fluidElements) {
        super(name, size, parentStar);
        this.fluidElements = fluidElements;
    }
    get fluids() {
        return this.fluidElements.join(', ');
    }
}
exports.default = IceGiant;
