import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { Grado } from 'src/app/modelos/grado';
import { GradoAlumno } from 'src/app/modelos/grado-alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { GradoAlumnoService } from 'src/app/servicios/grado-alumno.service';
import { GradosService } from 'src/app/servicios/grados.service';

@Component({
  selector: 'app-alumno-grado',
  templateUrl: './alumno-grado.component.html',
  styleUrls: ['./alumno-grado.component.css']
})
export class AlumnoGradoComponent implements OnInit {

  public seccion: string = "";
  public isEditable: boolean = false;

  // Grado alumnos
  public grado_alumno_id: number = 0;
  public grado_alumno : GradoAlumno[] = [];

  // Alumnos
  public alumno_id: number = 0;
  public alumnos: Alumno[] = [];

  // Grados
  public grado_id: number = 0;
  public grados: Grado[] = [];

  constructor(
    private gradoAlumnoServ: GradoAlumnoService,
    private alumnoServ: AlumnosService,
    private gradoService: GradosService,
    ) { }

  ngOnInit(): void { this.listarAlumnos(); this.listarGrado(); this.listarGradoAlumno(); }
  
  public reset(): void {
    this.seccion = "";
    this.grado_id = 0;
    this.alumno_id = 0;
    this.isEditable = false;
  }

  public editable(gradoAlumno: GradoAlumno): void {
    this.isEditable = true;
    this.grado_alumno_id = gradoAlumno.id;
    this.alumno_id = gradoAlumno.alumno.id;
    this.grado_id = gradoAlumno.grado.id;
    this.seccion = gradoAlumno.seccion; 

    alert("Acaba de activar la opción EDITAR para el elemento del formulario...");
  }

  public saveOrUpdate(): void {
    if (this.isEditable) {
      this.editarGradoAlumno();
    } else {
      this.guardarGradoAlumno();
    }
  }

  public listarAlumnos(){
    this.alumnoServ.listarAlumnos().subscribe(
      resp => { this.alumnos = resp; console.log(resp); },
      err => {alert("ERROR AL CARGAR LOS DATOS");}
    );
  }
  public listarGrado(){
    this.gradoService.listarGrados().subscribe(
      resp => { this.grados = resp; console.log(resp); },
      err => {alert("ERROR AL CARGAR LOS DATOS");}
    );
  }

  public listarGradoAlumno(){
    this.gradoAlumnoServ.listarGradoAlumno().subscribe(
      resp => { this.grado_alumno = resp; console.log(resp); },
      err => {alert("ERROR AL CARGAR LOS DATOS");}
    );
  }

  public guardarGradoAlumno(): void {
    const gradoAlumno = new GradoAlumno(this.alumno_id, this.grado_id, this.seccion);
    this.gradoAlumnoServ.guardarGradoAlumno(gradoAlumno).subscribe(
      resp => {
        alert(resp.mensaje);
        console.log(resp);
        this.listarGradoAlumno();
        this.reset();
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

  public editarGradoAlumno(): void {
    const gradoAlumno = new GradoAlumno(this.alumno_id, this.grado_id, this.seccion);
    this.gradoAlumnoServ.editarGradoAlumno(gradoAlumno, this.grado_alumno_id).subscribe(
      resp => {
        alert(resp.mensaje);
        console.log(resp);
        this.listarGradoAlumno();
        this.reset();
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

  public eliminarGradoAlumno(id: number): void {
    this.reset();
    this.gradoAlumnoServ.eliminarGradoAlumno(id).subscribe(
      resp => {
        alert(resp.mensaje);
        console.log(resp);
        this.listarGradoAlumno();
        this.reset();
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

}
