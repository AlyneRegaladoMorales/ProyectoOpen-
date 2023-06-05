import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './components/registro/registrar-usuario/registrar-usuario.component';
import { IniciarSesionComponent } from './components/registro/iniciar-sesion/iniciar-sesion.component';
import { CambiarContraseniaComponent } from './components/registro/cambiar-contrasenia/cambiar-contrasenia.component';
import { PagEmprendedorComponent } from './components/emprendedor/pag-emprendedor/pag-emprendedor.component';
import { PagClienteComponent } from './components/cliente/pag-cliente/pag-cliente.component';

const routes: Routes = [
  {path:'', redirectTo: 'iniciar_Sesion', pathMatch: 'full'},
  { path: 'registro', component: RegistrarUsuarioComponent },
  { path: 'iniciar_Sesion', component: IniciarSesionComponent },
  { path: 'cambiar-contraseña', component: CambiarContraseniaComponent },
  { path: 'pag-cliente', component: PagClienteComponent },
  { path: 'pag-emprendedor', component: PagEmprendedorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
