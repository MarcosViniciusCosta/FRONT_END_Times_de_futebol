import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent implements OnInit {

  @Output() mudarNumero: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  clicado():void
  {
    this.mudarNumero.emit();
  }

}
