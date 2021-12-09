"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetClassComponent = void 0;
const core_1 = require("@angular/core");
const Planet_1 = require("./Planet");
let PlanetClassComponent = class PlanetClassComponent {
    constructor() {
        this.edit = false;
        this.fakePlanet = new Planet_1.Planet('Earth', 2000, 'Sol');
        this.showPlanetInfo = false;
        this.listOfPlanets = [new Planet_1.Planet('Earth', 2000, 'Sol'), new Planet_1.Planet('Mars', 3000, 'Sol')];
    }
    ngOnInit() {
    }
    addPlanet(name, size, parentStar) {
        let newPlanet = new Planet_1.Planet(name, size, parentStar);
        this.listOfPlanets.push(newPlanet);
    }
    editMode() {
        this.edit = !this.edit;
    }
    editName(index, newName) {
        this.listOfPlanets[index].newName = newName;
        this.editMode();
    }
    displayInput(password) {
        if (password === '') {
            this.showPlanetInfo = true;
        }
    }
};
PlanetClassComponent = __decorate([
    (0, core_1.Component)({
        selector: 'planet-class',
        templateUrl: './planet-class.component.html',
        styleUrls: ['./planet-class.component.css']
    })
], PlanetClassComponent);
exports.PlanetClassComponent = PlanetClassComponent;
