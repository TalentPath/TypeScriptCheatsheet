"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialComponent = void 0;
const core_1 = require("@angular/core");
let TutorialComponent = class TutorialComponent {
    constructor() {
        this.classString = `class Planet {
    listOfPlanets:Planet[] = []
    private name:string
  
    constructor(name:string) {
      this.name = name
    }

    displayPlanet():void {
      { add planet to html page }
    }
  }`;
        this.inheriString = `class Planet {
    listOfPlanets:Planet[] = []
    private name:string
  
    constructor(name:string) {
      this.name = name
  }

  class GasGiant extends Planet { 
    private gases:string[]
    constructor(name:string) {
        super(name) 
        this.gases = gases
  }`;
        this.publiString = `class Planet {
    displayPlanet():void {
      { add planet to html page }
    }
  }

  displayPlanet()`;
        this.proteString = `class Planet {
    protected displayPlanet():void {
      { add planet to html page }
    }
  }

  class IceGiant extends Planet {
    public display() {
      this.displayPlanet()
    }
  }`;
        this.privaString = `
  class Planet {
    private name:string
    displayPlanet():void {
      { 
        this.name
      }
    }
  }

  let newPlanet = new Planet()
  <strike>planet.name = 'new bad name'</strike>`;
        this.statiString = `class Planet {
    public static listOfPlanets:Planet[] = []
    private name:string
  }

  newPlanet = new Planet(name);
  Planet.listOfPlanets.push(newPlanet);`;
        this.getteString = `class Planet {
    protected displayPlanet(): void {
      let planet = Planet.listOfPlanets[0]
      let fluids = &lt;IceGiant&gt;planet.fluids
    }
    
  }
  class IceGiant extends Planet {
    private fluidElements:string[];
    constructor(fluidElements:string[]) {
        super() 
        this.fluidElements = fluidElements;
    }

    public get fluids():string{
        return this.fluidElements.join(' , ')
    }`;
        this.setteString = `class Planet {
    public static listOfPlanets:Planet[] = []
    private name:string

    protected displayPlanet(): void {
      let newName = (&lt;HTMLInputElement&gt;someElement).value;
      Planet.listOfPlanets[planetIndex].planetName = newName;
    }

    public set planetName(newName:string){
      this.name = newName;
    }
  }`;
        this.bigString = `class Planet {
    public static listOfPlanets:Planet[] = []
    private name: string

    constructor(name:string) {
      this.name = name
    }

    protected displayPlanet(): void {
      let planet = Planet.listOfPlanets[0]
      let fluids = &lt;IceGiant&gt;planet.fluids

      let newName = (&lt;HTMLInputElement&gt;someElement).value;
      Planet.listOfPlanets[planetIndex].planetName = newName;
    }

    public set planetName(newName:string){
      this.name = newName;
    }
  }

  class IceGiant extends Planet {
    fluidElements:string[];
    constructor(fluidElements:string[]) {
        super() 
        this.fluidElements = fluidElements;
    }

    public display() {
      this.displayPlanet()
    }

    public get fluids():string{
        return this.fluidElements.join(' , ')
    }
  }

  function createNewPlanet (name:string): void {
    let newPlanet = new IceGiant(name);
    Planet.listOfPlanets.push(newPlanet);
    (&lt;IceGiant&gt;newPlanet).display();
  }`;
        this.chainString = `class numbOp {
    private n:number;
    constructor(num:number) {
        this.n = num;
    }

    public add(inc:number = 1):this
        this.n = this.n + inc;
        return this;
    }
    toString() { 
        return this.n;
    }
  }

  let finalNumber = new numbOp(3).add().add(2).toString();
  console.log(finalNumber) // Output: "6"`;
    }
    ngOnInit() {
    }
};
TutorialComponent = __decorate([
    (0, core_1.Component)({
        selector: 'tutorial',
        templateUrl: './tutorial.component.html',
        styleUrls: ['./tutorial.component.css']
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
