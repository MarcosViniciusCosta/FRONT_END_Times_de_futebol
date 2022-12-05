import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databind',
  templateUrl: './two-way-databind.component.html',
  styleUrls: ['./two-way-databind.component.css']
})
export class TwoWayDatabindComponent implements OnInit {

  nome: string ="";
  idade: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
