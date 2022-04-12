import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grado } from '../modelos/grado';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradosService {
  public url: string = environment.apiUrl + "grado";

  constructor(private httpClient: HttpClient) {}

  public listarGrados(): Observable<Grado[]>{
    return this.httpClient.get<Grado[]>(this.url);
  }

  public guardarGrado(grado: Grado): Observable<any>{
    return this.httpClient.post<Grado[]>(this.url, grado);
  }
  public eliminarGrado(id: number): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id);
  }

  public editarGrado(grado: Grado, id: number): Observable<any>{
    return this.httpClient.put<Grado[]>(this.url + "/" + id, grado);
  }
}
