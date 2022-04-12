import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GradoAlumno } from '../modelos/grado-alumno';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradoAlumnoService {

  public url: string = environment.apiUrl + "alumno-grado";

  constructor(private httpClient: HttpClient) {}

  public listarGradoAlumno(): Observable<GradoAlumno[]>{
    return this.httpClient.get<GradoAlumno[]>(this.url);
  }
  public guardarGradoAlumno(alumno: GradoAlumno): Observable<any>{
    return this.httpClient.post<GradoAlumno[]>(this.url, alumno);
  }
  public editarGradoAlumno(alumno: GradoAlumno, id: number): Observable<any>{
    return this.httpClient.put<GradoAlumno[]>(this.url + "/" + id, alumno);
  }
  public eliminarGradoAlumno(id: number): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id);
  }
}
