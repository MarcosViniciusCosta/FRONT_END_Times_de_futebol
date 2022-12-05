import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filho-primeiro',
  templateUrl: './filho-primeiro.component.html',
  styleUrls: ['./filho-primeiro.component.css']
})
export class FilhoPrimeiroComponent implements OnInit {

  @Input() name:string = "";
  @Input() email:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
