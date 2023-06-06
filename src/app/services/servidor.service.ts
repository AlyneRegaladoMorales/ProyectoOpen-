import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Gestor } from '../models/gestor';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  private usuarioUrl = 'http://localhost:3000/usuario'
  private gestorUrl = 'http://localhost:3000/gestor'
  private emprendimientoUrl='http://localhost:3000/emprendimiento'

  constructor(private http:HttpClient) { }

  agregar_usuario(data: any): Observable<any> {
    return this.http.post(this.usuarioUrl,data);
  }
  agregar_gestor(data: any): Observable<any>{
    return this.http.post(this.gestorUrl,data);
  }
  agregar_emprendimiento(data: any): Observable<any>{
    return this.http.post(this.emprendimientoUrl,data);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<Usuario>(`${this.usuarioUrl}/${id}`);
  }

  get_gestor(username: string): Observable<any> {
    return this.http.get<Gestor>(`${this.gestorUrl}?username=${username}`);
  }

}


