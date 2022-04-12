import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../modelos/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  public url: string = "http://localhost:8080/profesores";

  constructor(private httpClient: HttpClient) {}

  public listarProfesores(): Observable<Profesor[]>{
    return this.httpClient.get<Profesor[]>(this.url);
  }

  public guardarProfesores(alumno: Profesor): Observable<any>{
    return this.httpClient.post<Profesor[]>(this.url, alumno);
  }
  public eliminarProfesores(id: number): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id);
  }

  public editarProfesor(profesor: Profesor, id: number): Observable<any>{
    return this.httpClient.put<Profesor[]>(this.url + "/" + id, profesor);
  }
}
