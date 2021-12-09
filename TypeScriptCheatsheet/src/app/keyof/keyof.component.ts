import { Component, OnInit } from '@angular/core';
import { MealOrder } from './mealorderInterface';

@Component({
  selector: 'keyof',
  templateUrl: './keyof.component.html',
  styleUrls: ['./keyof.component.css']
})
export class KeyofComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  myOrder: MealOrder = {
    starter: 'salad',
    entre: 'pasta',
    drink: 'pepsi',
    dessert: 'ice cream'
  }

  changeMenu(order:MealOrder, orderEntry: keyof MealOrder, change:string){
    order[orderEntry] = change;
    }
  
}
