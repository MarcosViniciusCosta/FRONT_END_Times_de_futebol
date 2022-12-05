import { MensagensService } from 'src/app/services/mensagens/mensagens.service';
import { ListasService } from './../../services/listas/listas.service';
import { Time } from './../../model/times';
import { Component, OnInit, Output } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario-criacao',
  templateUrl: './formulario-criacao.component.html',
  styleUrls: ['./formulario-criacao.component.css']
})
export class FormularioCriacaoComponent implements OnInit {

  constructor(private listasService :ListasService, private mensagensService: MensagensService, private roteador: Router) { }

  ngOnInit(): void {
  }

  async createHandler(time: Time)
  {

    await this.listasService.createTime(time).subscribe();

    this.mensagensService.adicionarMensagem("Time criado");

    this.roteador.navigate(['/']);
  }

}
