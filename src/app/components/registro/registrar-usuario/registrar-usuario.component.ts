import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
constructor(
    private builder: FormBuilder,
    private servicio: ServidorService,
    private router: Router) { }

  usuario = this.builder.group({
    nombre: this.builder.control('', Validators.required),
    apellido: this.builder.control('', Validators.required),
    celular: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),

    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    rol: this.builder.control('Cliente'),

  })

    registrarUsuario() {
    
  }
}
