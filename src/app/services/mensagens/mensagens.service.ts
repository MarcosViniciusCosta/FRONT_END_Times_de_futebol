import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  private mensagem: string = "";

  constructor() { }

  adicionarMensagem(mensagem: string)
  {
    this.mensagem = mensagem;

    setTimeout(() =>
    {
      this.limparMensagem();
    },3000);

  }

  limparMensagem()
  {
    this.mensagem = "";
  }

  getMensagem()
  {
    return this.mensagem;
  }
}
