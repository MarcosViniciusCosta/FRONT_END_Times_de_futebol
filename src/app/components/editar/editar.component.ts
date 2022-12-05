import { Component, OnInit } from '@angular/core';
import { ListasService } from 'src/app/services/listas/listas.service';
import { MensagensService } from 'src/app/services/mensagens/mensagens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Time } from 'src/app/model/times';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  time!: Time;

  constructor(private listasService :ListasService, private mensagensService: MensagensService, private routes: ActivatedRoute
    ,private router: Router) { }

  ngOnInit(): void {
    const id: number = Number(this.routes.snapshot.paramMap.get("id"));

    this.listasService.findById(id).subscribe((timeAchado) => this.time= timeAchado);

  }

  async editHandler(timeRecebido: Time)
  {
    timeRecebido.id = this.time.id;
    await this.listasService.updateTime(timeRecebido).subscribe();

    this.mensagensService.adicionarMensagem(`Time ${timeRecebido.name} Atualizado com sucesso`);

    this.router.navigate(['/']);
  }

}
