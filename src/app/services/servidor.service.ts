import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  private usuarioUrl = 'http://localhost:3000/usuario'
  private gestorUrl = 'http://localhost:3000/gestor'
  private emprendimeito=

  constructor(private http:HttpClient) { }

  agregar_usuario(data: any): Observable<any> {
    return this.http.post(this.usuarioUrl,data);
  }
  agregar_gestor(data: any): Observable<any>{
    return this.http.post(this.gestorUrl,data);
  }


}
