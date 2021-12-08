import { Component, OnInit } from '@angular/core';
import { Planet } from './Planet';
import { RockyInfo, IceInfo, GasInfo, Info } from './interfaces'

@Component({
  selector: 'planet-class',
  templateUrl: './planet-class.component.html',
  styleUrls: ['./planet-class.component.css']
})


export class PlanetClassComponent implements OnInit {
  edit:boolean = false;
  fakePlanet: Planet = new Planet('Earth', 2000, 'Sol');
  public listOfPlanets: Planet[] = [new Planet('Earth', 2000, 'Sol'), new Planet('Mars', 3000, 'Sol')]

  constructor() { }
  ngOnInit(): void {
  }

  addPlanet(name:string, size:number, parentStar:string):void{
    let newPlanet = new Planet(name, size, parentStar);
    this.listOfPlanets.push(newPlanet)
  }

  editMode(){
    this.edit = !this.edit
  }

  editName(index:number, newName:string){
    this.listOfPlanets[index].newName = newName;
    this.editMode();
  }
}
