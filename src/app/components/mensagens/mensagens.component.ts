
import { Component, OnInit } from '@angular/core';

import { MensagensService } from 'src/app/services/mensagens/mensagens.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  constructor(public mensagensService: MensagensService) { }

  mensagem: string = "";

  ngOnInit(): void {
  }

}
