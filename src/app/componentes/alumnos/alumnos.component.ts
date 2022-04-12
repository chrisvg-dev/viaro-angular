import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {
  public url: string = "http://localhost:8080/alumnos";
  alumnos: Alumno[] = [];

  // VALIDACION PARA EDITAR / GUARDAR
  public isEditable: boolean = false;
  public idAlumno: number = 0;

  // VARIABLES PERTENECIENTES AL MODELO
  public nombre: string = "";
  public apellidos: string = "";
  public genero: string = "Selecciona una opción...";
  public fechaNacimiento: string = "";

  constructor(
    private alumnoService: AlumnosService
    ) { }

  ngOnInit(): void {
    this.listarAlumnos();
  }

  public reset() : void{
    this.idAlumno = 0;
    this.isEditable = false;
    this.nombre = "";
    this.apellidos = "";
    this.genero = "";
    this.fechaNacimiento = "";
  }

  public listarAlumnos() {
    this.alumnoService.listarAlumnos().subscribe(
      resp => {
        this.alumnos = resp;
      },
      err => {
        console.log(err);
      }
    );
  }

  public editable(alumno: Alumno): void {
    this.isEditable = true;
    this.idAlumno = alumno.id;

    this.nombre = alumno.nombre;
    this.apellidos = alumno.apellidos;
    this.genero = alumno.genero;
    this.fechaNacimiento = alumno.fechaNacimiento;

    alert("Acaba de activar la opción EDITAR para el elemento del formulario...");
  }

  public saveOrUpdate(): void {
    if (this.isEditable) {
      this.editarAlumno();
    } else {
      this.guardarAlumno();
    }
  }

  public guardarAlumno(): void {
    const alumno = new Alumno(this.nombre, this.apellidos, this.genero, this.fechaNacimiento);
    this.alumnoService.guardarAlumno(alumno).subscribe(
      resp => {
        alert(resp.mensaje);
      console.log(resp);
      this.listarAlumnos();
      this.reset();
      },
      err => {
        console.log(err);
      }
    );
  }

  public editarAlumno(): void {
    const alumno = new Alumno(this.nombre, this.apellidos, this.genero, this.fechaNacimiento);
    this.alumnoService.editarAlumno(alumno, this.idAlumno).subscribe(
      resp => {
        alert(resp.mensaje);
        console.log(resp);
        this.listarAlumnos();
        this.reset();
      },
      err => {
        console.log(err);
      }
    );
  }

  public eliminarAlumno(id: number): void {
    this.reset();
    this.alumnoService.eliminarAlumno(id).subscribe(
      resp => {
        alert(resp.mensaje);
      console.log(resp);
      this.listarAlumnos();
      this.reset();
      },
      err => {
        console.log(err);
      }
    );
  }

}
