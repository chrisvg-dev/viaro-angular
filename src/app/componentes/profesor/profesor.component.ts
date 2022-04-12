import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/modelos/profesor';
import { ProfesoresService } from 'src/app/servicios/profesores.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  profesores: Profesor[] = [];

  // VALIDACION PARA EDITAR / GUARDAR
  public isEditable: boolean = false;
  public idProfesor: number = 0;

  // VARIABLES PERTENECIENTES AL MODELO
  public nombre: string = "";
  public apellidos: string = "";
  public genero: string = "Selecciona una opción...";

  constructor(
    private profesorService: ProfesoresService
    ) { }

  ngOnInit(): void {
    this.listarProfesores();
  }

  public reset() : void{
    this.idProfesor = 0;
    this.isEditable = false;
    this.nombre = "";
    this.apellidos = "";
    this.genero = "";
  }

  public editable(profesor: Profesor): void {
    this.isEditable = true;
    this.idProfesor = profesor.id;

    this.nombre = profesor.nombre;
    this.apellidos = profesor.apellidos;
    this.genero = profesor.genero;

    alert("Acaba de activar la opción EDITAR para el elemento del formulario...");
  }

  public saveOrUpdate(): void {
    if (this.isEditable) {
      this.editarProfesor();
    } else {
      this.guardarProfesor();
    }
  }

  public listarProfesores() {
    this.profesorService.listarProfesores().subscribe(
      resp => {
        this.profesores = resp;
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

  public guardarProfesor(): void {
    const profesor = new Profesor(this.nombre, this.apellidos, this.genero);
    this.profesorService.guardarProfesores(profesor).subscribe(
      resp => {
        alert(resp.mensaje);
      console.log(resp);
      this.listarProfesores();
      this.reset();
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

  public editarProfesor(): void {
    const profesor = new Profesor(this.nombre, this.apellidos, this.genero);
    this.profesorService.editarProfesor(profesor, this.idProfesor).subscribe(
      resp => {
        alert(resp.mensaje);
        console.log(resp);
        this.listarProfesores();
        this.reset();
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

  public eliminarProfesores(id: number): void {
    this.profesorService.eliminarProfesores(id).subscribe(
      resp => {
        alert(resp.mensaje);
      console.log(resp);
      this.listarProfesores();
      this.reset();
      },
      err => {
        console.log(err);
      }
    );
  }
}
