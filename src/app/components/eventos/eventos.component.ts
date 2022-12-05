import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit
{
  mostrar: boolean = false;

  mostrarMensagem(): void
  {
    this.mostrar = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
