import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.component.html',
  styleUrls: ['./emissor.component.css']
})
export class EmissorComponent implements OnInit {

  numeroAtual:number = 428;

  onMudarNumero() : void
  {
    this.numeroAtual = Math.floor(Math.random()*(100));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
