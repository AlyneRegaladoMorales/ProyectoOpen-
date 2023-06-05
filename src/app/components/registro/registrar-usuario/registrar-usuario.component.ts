import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from 'src/app/services/servidor.service';
import { Gestor } from 'src/app/models/gestor';
import { Usuario } from 'src/app/models/usuario';
import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Emprendimiento } from 'src/app/models/emprendimiento';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  form_registro: FormGroup;

  gestor: Gestor = new Gestor();
  usuario: Usuario = new Usuario();
  emprendimiento: Emprendimiento = new Emprendimiento();



constructor(
  private builder: FormBuilder,
  private servicio: ServidorService
) { 
  this.form_registro = this.builder.group({
    nombre: this.builder.control('', Validators.required),
    apellido: this.builder.control('', Validators.required),
    celular: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    rol: this.builder.control('Cliente'),

    id_usuario: [''],
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),

    nombre_Empresa: [''],
    descripcion: [''],
    rubro: [''],
    
  })
}
  
  asignaciones() {
          //entidad usuario
      this.usuario.nombre = this.form_registro.value.nombre;
      this.usuario.apellido = this.form_registro.value.apellido;
      this.usuario.celular = this.form_registro.value.celular;
      this.usuario.email = this.form_registro.value.email;
      this.usuario.rol = this.form_registro.value.rol;
  
      //entidad de gestor //Relacion de uno a uno 
      this.gestor.username = this.form_registro.value.username;
      this.gestor.password = this.form_registro.value.password;
      this.gestor.id_usuario = this.usuario.id;

    if (this.usuario.rol === 'Emprendedor') {
        this.emprendimiento.nombre_Empresa = this.form_registro.value.nombre_Empresa;
      this.emprendimiento.descripcion = this.form_registro.value.descripcion;
      this.emprendimiento.rubro = this.form_registro.value.rubro;
      this.emprendimiento.id_usuario != this.usuario.id;
      }
      

  }

  registrarUsuario() {      
    this.asignaciones();

    if (this.form_registro.valid) {
          this.servicio.agregar_usuario(this.usuario).subscribe(result => {
          console.log('Usuario registrado con exito');
        }),
          this.servicio.agregar_gestor(this.gestor).subscribe(result => {
            console.log('Agregado al gestor')
        })
  
        
        
        if (this.usuario.rol == 'Emprendedor') {
          this.servicio.agregar_emprendimiento(this.emprendimiento).subscribe(result => {
            console.log("Se agregó emprendimiento");
           })
        }
      }
  }
}
