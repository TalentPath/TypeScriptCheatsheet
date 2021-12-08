import { Component, OnInit } from '@angular/core';
import { primitives } from './ts/primitives';
import { tuples } from './ts/tuples';
import { complexType } from './ts/complexType';
import { typeAliases } from './ts/typeAliases';
import { typeInference } from './ts/typeInference';
import { union } from './ts/union';


@Component({
  selector: 'type-basic',
  templateUrl: './type-basic.component.html',
  styleUrls: ['./type-basic.component.css']
})


export class TypeBasicComponent implements OnInit {
  currentText:string = "im here ";
  text_area: HTMLTextAreaElement = document.getElementById("terminal") as HTMLTextAreaElement;
   arr: string[] = []
   index: number = 0

terminal: { text_area: HTMLTextAreaElement, arr: string[], index: number } = { text_area: this.text_area, arr: this.arr, index: this.index };
  constructor() {
    
   }

  ngOnInit(): void {

      primitives(this.terminal);
      tuples(this.terminal);
      complexType(this.terminal);
      typeAliases(this.terminal);
      typeInference(this.terminal);
      union(this.terminal);

  }
  

// text_area.addEventListener("keydown", evt => {
//   if (evt.key === "Enter") {
//     index = (index + 1 === arr.length) ? 0 : index + 1;
//     text_area.value = arr[index];
//   }
// });

terminalClick(){
  this.terminal.index = (this.terminal.index + 1 === this.terminal.arr.length) ? 0 : this.terminal.index + 1;
  // this.text_area.value = this.arr[this.index];
  this.currentText = this.terminal.arr[this.terminal.index]

console.log(typeof this.currentText)
}
}
