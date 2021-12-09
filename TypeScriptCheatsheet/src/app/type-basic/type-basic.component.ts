import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { primitives } from './ts/primitives';
import { tuples } from './ts/tuples';
import { complexType } from './ts/complexType';
import { typeAliases } from './ts/typeAliases';
import { typeInference } from './ts/typeInference';
import { union } from './ts/union';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'type-basic',
  templateUrl: './type-basic.component.html',
  styleUrls: ['./type-basic.component.css']
})


export class TypeBasicComponent implements OnInit {

  currentText:string = "Click here, press enter";
  @ViewChild("textarea") text!: ElementRef;
  text_area!:HTMLTextAreaElement; 
  arr: string[] = [];
  index: number = 0;

terminal: { text_area: HTMLTextAreaElement, arr: string[], index: number } = { text_area: this.text_area, arr: this.arr, index: this.index };
  constructor() {
    
   }
ngOnInit():void{

}

ngAfterViewInit(): void {
    this.text_area = this.text.nativeElement;    
    this.terminal.text_area = this.text_area;
    this.initTerminal();
  }
  

terminalClick(textarea:HTMLTextAreaElement){
  
  this.terminal.index = (this.terminal.index + 1 === this.terminal.arr.length) ? 0 : this.terminal.index + 1;

  this.currentText = this.terminal.arr[this.terminal.index];
  
  // if(!this.text_area){
  //   this.text_area = textarea;
  //   this.terminal.text_area = textarea
  //   this.initTerminal();
  // }

}
initTerminal() {
      primitives(this.terminal);
      tuples(this.terminal);
      complexType(this.terminal);
      typeAliases(this.terminal);
      typeInference(this.terminal);
      union(this.terminal);
  
}

}
