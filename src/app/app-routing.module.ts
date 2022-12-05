import { EditarComponent } from './components/editar/editar.component';
import { FormularioCriacaoComponent } from './components/formulario-criacao/formulario-criacao.component';
import { FormularioTimeComponent } from './components/formulario-time/formulario-time.component';
import { BuscarPorIdComponent } from './components/buscar-por-id/buscar-por-id.component';
import { ListasComponent } from './components/listas/listas.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {
    path: "", component: PrimeiroComponenteComponent
  },
  {
    path: "times", component: ListasComponent
  },
  {
    path: "times/buscarId/:id", component: BuscarPorIdComponent
  },
  {
    path: "times/cadastrar", component: FormularioCriacaoComponent
  },
  {
    path: "times/editar/:id", component: EditarComponent
  }

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
