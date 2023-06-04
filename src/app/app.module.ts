import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarSesionComponent } from './components/registro/iniciar-sesion/iniciar-sesion.component';
import { RegistrarUsuarioComponent } from './components/registro/registrar-usuario/registrar-usuario.component';
import { CambiarContraseniaComponent } from './components/registro/cambiar-contrasenia/cambiar-contrasenia.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    RegistrarUsuarioComponent,
    CambiarContraseniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
