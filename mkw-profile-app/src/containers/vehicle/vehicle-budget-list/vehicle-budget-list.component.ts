import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-budget-list',
  templateUrl: './vehicle-budget-list.component.html',
  styleUrls: ['./vehicle-budget-list.component.css']
})
export class VehicleBudgetListComponent implements OnInit {

  expensiveList = [{date:new Date(), typeOfExpense:"PETROL", qty:10, price:103, amount:1030, place: "RJPM", km:53000, comments:"NO"},
    {date:new Date(), typeOfExpense:"PETROL", qty:20, price:103, amount:2060, place: "Tenkasi", km:54000, comments:"NO"},
    {date:new Date(), typeOfExpense:"PETROL", qty:10, price:103, amount:1030, place: "Madurai", km:5550, comments:"NO"}]
  constructor() { }

  ngOnInit() {
  }

}
