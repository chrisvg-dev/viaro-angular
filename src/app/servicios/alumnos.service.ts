import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../modelos/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  public url: string = "http://localhost:8080/alumnos";

  constructor(private httpClient: HttpClient) {}

  public listarAlumnos(): Observable<Alumno[]>{
    return this.httpClient.get<Alumno[]>(this.url);
  }

  public guardarAlumno(alumno: Alumno): Observable<any>{
    return this.httpClient.post<Alumno[]>(this.url, alumno);
  }
  public editarAlumno(alumno: Alumno, id: number): Observable<any>{
    return this.httpClient.put<Alumno[]>(this.url + "/" + id, alumno);
  }
  public eliminarAlumno(id: number): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id);
  }
}
