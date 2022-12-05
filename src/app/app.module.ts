import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { FilhoPrimeiroComponent } from './components/filho-primeiro/filho-primeiro.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { CondicionalComponent } from './components/condicional/condicional.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmissorComponent } from './components/emissor/emissor.component';
import { ReceptorComponent } from './components/receptor/receptor.component';
import { ListasComponent } from './components/listas/listas.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayDatabindComponent } from './components/two-way-databind/two-way-databind.component';
import { HttpClientModule } from "@angular/common/http";
import { BuscarPorIdComponent } from './components/buscar-por-id/buscar-por-id.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormularioTimeComponent } from './components/formulario-time/formulario-time.component';
import { FormularioCriacaoComponent } from './components/formulario-criacao/formulario-criacao.component';
import { MensagensComponent } from './components/mensagens/mensagens.component';
import { EditarComponent } from './components/editar/editar.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    FilhoPrimeiroComponent,
    DiretivasComponent,
    CondicionalComponent,
    EventosComponent,
    EmissorComponent,
    ReceptorComponent,
    ListasComponent,
    PipesComponent,
    TwoWayDatabindComponent,
    BuscarPorIdComponent,
    RodapeComponent,
    CabecalhoComponent,
    FormularioTimeComponent,
    FormularioCriacaoComponent,
    MensagensComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
