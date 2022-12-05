import { Time } from './../../model/times';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';


@Component({
  selector: 'app-formulario-time',
  templateUrl: './formulario-time.component.html',
  styleUrls: ['./formulario-time.component.css']
})
export class FormularioTimeComponent implements OnInit {

  @Input() texto_botao!: string;
  @Output() onSubmit = new EventEmitter<Time>();
  @Input() timeRecebidoParaEdicao?: Time | null;

  formularioTime!: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    // iniciando componentes do angular, semelhar a um setter
    this.formularioTime = new FormGroup(
      {
        id: new FormControl(""),
        name: new FormControl("", [Validators.required]),
        marketValue: new FormControl("", [Validators.required,Validators.min(100000)],),
        country: new FormControl("", [Validators.required])
      }
    );
    console.log("time = "+ this.timeRecebidoParaEdicao?.name);
  }

  get name()
  {
    return this.formularioTime.get("name")!;
  }

  get country()
  {
    return this.formularioTime.get("country")!;
  }

  get marketValue()
  {
    return this.formularioTime.get("marketValue")!;
  }

  enviar():void{
    if(this.formularioTime.valid)
    {
      this.onSubmit.emit(this.formularioTime.value);
    }
  }

}
