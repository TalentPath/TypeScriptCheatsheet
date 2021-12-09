"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetClassComponent = void 0;
const core_1 = require("@angular/core");
const Planet_1 = require("./Planet");
const GasGiant_js_1 = __importDefault(require("./GasGiant.js"));
const IceGiant_js_1 = __importDefault(require("./IceGiant.js"));
const RockyPlanet_js_1 = __importDefault(require("./RockyPlanet.js"));
let PlanetClassComponent = class PlanetClassComponent {
    constructor() {
        this.edit = false;
        this.fakePlanet = new Planet_1.Planet('Earth', 2000, 'Sol');
        this.showPlanetInfo = false;
        this.planetType = 'none';
        this.elements = [];
        this.listOfPlanets = [new RockyPlanet_js_1.default('Earth', 2000, 'Sol', ['Iron', 'Nickel'])];
    }
    ngOnInit() {
    }
    addPlanet(name, type, info) {
        let newPlanet;
        if (type === 'rocky') {
            newPlanet = new RockyPlanet_js_1.default(name, info.size, info.parentStar, info.coreComponents);
            this.listOfPlanets.push(newPlanet);
        }
        if (type === 'gas') {
            newPlanet = new GasGiant_js_1.default(name, info.size, info.parentStar, info.gases);
            this.listOfPlanets.push(newPlanet);
        }
        if (type === 'ice') {
            newPlanet = new IceGiant_js_1.default(name, info.size, info.parentStar, info.fluidElements);
            this.listOfPlanets.push(newPlanet);
        }
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
    displayElements(type) {
        console.log(`triggered ${type}`);
        this.planetType = type;
    }
    addElement(element) {
        this.elements.push(element);
    }
    convertStringToNumber(input) {
        if (input.trim().length == 0) {
            return NaN;
        }
        return Number(input);
    }
    returnType(index) {
        if (this.listOfPlanets[index] instanceof RockyPlanet_js_1.default) {
            return 'rocky';
        }
        else if (this.listOfPlanets[index] instanceof GasGiant_js_1.default)
            return 'gas';
        else if (this.listOfPlanets[index] instanceof IceGiant_js_1.default)
            return 'ice';
        return 'planet';
    }
    returnElements(planet) {
        if (planet instanceof RockyPlanet_js_1.default)
            return planet.coreComp;
        else if (planet instanceof GasGiant_js_1.default)
            return planet.gasList;
        else if (planet instanceof IceGiant_js_1.default)
            return planet.fluids;
        return '';
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
