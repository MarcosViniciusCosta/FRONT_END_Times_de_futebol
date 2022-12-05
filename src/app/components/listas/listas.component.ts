import { PaginaTime } from './../../model/paginaTime';
import { ListasService } from './../../services/listas/listas.service';
import { Time } from './../../model/times';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  timesTotais: Time[] = [

  ];
  timesExibidos: Time[] = [

  ];

  constructor(private listasService: ListasService)
  {

  }

  ngOnInit(): void {
    this.getAllTimes();
  }

  deleteTime(id: number)
  {
    this.timesTotais = this.timesTotais.filter((timePercorredor) => (timePercorredor.id != id));
    this.listasService.deleteTime(id).subscribe();
  }

  getAllTimes(): void
  {
    this.listasService.getAll().subscribe((paginaRetornada: PaginaTime) =>
    (this.timesTotais = paginaRetornada.content));

    this.listasService.getAll().subscribe((paginaRetornada: PaginaTime) =>
    (this.timesExibidos = paginaRetornada.content));
    //console.log(`Times: ${this.times}`);
  }

  buscar(evento: Event):void
  {
    const tag = evento.target as HTMLInputElement;
    const valorBuscado = tag.value;

    this.timesExibidos = this.timesTotais.filter((time) => time.name.toLowerCase().includes(valorBuscado));

  }

}
