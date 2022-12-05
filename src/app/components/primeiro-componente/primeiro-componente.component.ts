import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  name:string = "Marcos";
  age:number = 23;
  job:string = "Developer";

  constructor() { }

  ngOnInit(): void {
  }

}
