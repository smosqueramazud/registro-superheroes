import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModificarComponent } from './components/modificar/modificar.component';

const routes: Routes = [

  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'modificar', component: ModificarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
