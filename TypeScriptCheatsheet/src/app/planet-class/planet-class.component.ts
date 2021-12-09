import { Component, OnInit } from '@angular/core';
import { Planet } from './Planet';
import { RockyInfo, IceInfo, GasInfo, Info } from './interfaces'
import GasGiant from "./GasGiant.js";
import IceGiant from "./IceGiant.js";
import RockyPlanet from "./RockyPlanet.js";

@Component({
  selector: 'planet-class',
  templateUrl: './planet-class.component.html',
  styleUrls: ['./planet-class.component.css']
})


export class PlanetClassComponent implements OnInit {
  edit:boolean = false;
  fakePlanet: Planet = new Planet('Earth', 2000, 'Sol');
  showPlanetInfo:boolean = false
  planetType:string = 'none'
  elements:string[] = []
  public listOfPlanets: Planet[] = [new RockyPlanet('Earth', 2000, 'Sol', ['Iron', 'Nickel'])]

  
  constructor() { }
  ngOnInit(): void {
  }

  addPlanet(name:string, type:string, info:Info):void{
    let newPlanet:Planet

    if (type === 'rocky') {
      newPlanet = new RockyPlanet(name, info.size, info.parentStar, (<RockyInfo>info).coreComponents);
        this.listOfPlanets.push(newPlanet);
    }

    if (type === 'gas') {
      newPlanet = new GasGiant(name, info.size, info.parentStar, (<GasInfo>info).gases);
        this.listOfPlanets.push(newPlanet);
    }

    if (type === 'ice') {
      newPlanet = new IceGiant(name, info.size, info.parentStar, (<IceInfo>info).fluidElements);
        this.listOfPlanets.push(newPlanet);
    }

    this.showPlanetInfo = false
    this.planetType = 'none'
    this.elements = []
  }

  editMode(){
    this.edit = !this.edit
  }

  editName(index:number, newName:string){
    this.listOfPlanets[index].newName = newName;
    this.editMode();
  }

  displayInput(password:string) {
    if (password === '') {
      this.showPlanetInfo = true
    }
  }

  displayElements(type:string): void {
    console.log(`triggered ${type}`)
    this.planetType = type
  }

  addElement(element:string) {
    this.elements.push(element)
  }

  convertStringToNumber(input: string) { 
    if (input.trim().length==0) { 
        return NaN;
    }
    return Number(input);
}
  returnType(index:number):string{
    if(this.listOfPlanets[index] instanceof RockyPlanet){
      return 'rocky';
    }
    else if(this.listOfPlanets[index] instanceof GasGiant)
      return 'gas';
    else if(this.listOfPlanets[index] instanceof IceGiant)
      return 'ice'
    return 'planet'
  }

  returnElements(planet:Planet|RockyPlanet|IceGiant|GasGiant):string{
    if(planet instanceof RockyPlanet)
      return planet.coreComp;
    else if(planet instanceof GasGiant)
      return planet.gasList;
    else if(planet instanceof IceGiant)
      return planet.fluids
    return ''
  }
}
