import { Router } from '@angular/router';
import { MensagensService } from './../../services/mensagens/mensagens.service';
import { Observable } from 'rxjs';
import { ListasService } from './../../services/listas/listas.service';
import { Time } from 'src/app/model/times';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-por-id',
  templateUrl: './buscar-por-id.component.html',
  styleUrls: ['./buscar-por-id.component.css']
})
export class BuscarPorIdComponent implements OnInit
{
  constructor(
    private listasService: ListasService,
    private router: ActivatedRoute,
    private mensagensService :MensagensService,
    private roteador: Router
  ){ this.getTime()}

  time?: Time ;


  getTime()
  {
    const id = Number(this.router.snapshot.paramMap.get("id"));
    this.listasService.findById(id).subscribe((timeAchado) => this.time = timeAchado);
  }

  deleteTime(id: number)
  {
    this.listasService.deleteTime(id).subscribe();

    this.mensagensService.adicionarMensagem("Time removido");

    this.roteador.navigate(['/']);
  }

  ngOnInit(): void {

  }

}
