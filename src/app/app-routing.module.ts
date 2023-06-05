import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './components/registro/registrar-usuario/registrar-usuario.component';
import { IniciarSesionComponent } from './components/registro/iniciar-sesion/iniciar-sesion.component';
import { CambiarContraseniaComponent } from './components/registro/cambiar-contrasenia/cambiar-contrasenia.component';

const routes: Routes = [
  {path:'', redirectTo: 'iniciar_Sesion', pathMatch: 'full'},
  { path: 'registro', component: RegistrarUsuarioComponent },
  { path: 'iniciar_Sesion', component: IniciarSesionComponent },
  { path: 'cambiar-contraseña', component: CambiarContraseniaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
