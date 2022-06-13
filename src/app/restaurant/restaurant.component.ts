import { Component, OnInit } from '@angular/core';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   menu ={
    id:1,
    name:'Potato',
    quantity:' 1 plate',
    price:'100',
    veg:'true'


  }

}

