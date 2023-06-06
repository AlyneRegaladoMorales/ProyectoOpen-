import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServidorService } from 'src/app/services/servidor.service';
import { Router } from '@angular/router';
import { Gestor } from 'src/app/models/gestor';
import { Usuario } from 'src/app/models/usuario';
import { Emprendimiento } from 'src/app/models/emprendimiento';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  loginForm: FormGroup;

  gestor: Gestor = new Gestor();
  usuario: Usuario = new Usuario();
  emprendimiento: Emprendimiento = new Emprendimiento();

  constructor(private builder: FormBuilder, private servicio: ServidorService, private router: Router) {
    this.loginForm = this.builder.group({
      username: this.builder.control('', Validators.required),
      i_password: this.builder.control('', Validators.required),
    });
  }



  verificarlogin() {
    const username = this.loginForm.value.username; // Corrección aquí
    const password = this.loginForm.value.i_password;

    this.servicio.get_gestor(username).subscribe(
      (usuario) => {
        if (usuario && usuario.password) {
          // Obtener el objeto de usuario
          this.servicio.getUsuario(usuario.id_usuario).subscribe(
            (usuarioCompleto) => {
              if (usuarioCompleto) {
                // Verificar el rol del usuario
                if (usuarioCompleto.rol === 'Cliente') {
                  this.router.navigate(['/pag-cliente']); // Redirigir al componente del cliente
                } else if (usuarioCompleto.rol === 'Emprendedor') {
                  this.router.navigate(['/pag-emprendedor']); // Redirigir al componente del emprendedor
                } else {
                  console.log('Rol desconocido');
                }
              } else {
                console.log('No se encontró el usuario');
              }
            },
            (error) => {
              console.error('Error al obtener el usuario', error);
            }
          );
        } else {
          // Las credenciales son incorrectas
          console.log('Credenciales incorrectas');
        }
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}

