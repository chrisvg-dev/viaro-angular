import { Component, OnInit } from '@angular/core';
import { Grado } from 'src/app/modelos/grado';
import { Profesor } from 'src/app/modelos/profesor';
import { GradosService } from 'src/app/servicios/grados.service';
import { ProfesoresService } from 'src/app/servicios/profesores.service';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent implements OnInit {
  grados: Grado[] = [];
  profesores: Profesor[] = [];

  // VALIDACION PARA EDITAR / GUARDAR
  public isEditable: boolean = false;
  public idGrado: number = 0;

  // VARIABLES PERTENECIENTES AL MODELO
  public nombre: string = "";
  public profesor: number = 0;

  constructor(
    private gradoService: GradosService,
    private profesorService: ProfesoresService
    ) { }

  ngOnInit(): void {
    this.listarGrados();
    this.listarProfesores();
  }

  public reset() : void{
    this.idGrado = 0;
    this.isEditable = false;
    this.nombre = "";
    this.profesor = 0;
  }

  public editable(grado: Grado): void {
    this.isEditable = true;
    this.idGrado = grado.id;

    this.nombre = grado.nombre;
    this.profesor = grado.profesor.id;
    console.log(this.profesor);

    alert("Acaba de activar la opción EDITAR para el elemento del formulario...");
  }

  public saveOrUpdate(): void {
    if (this.isEditable) {
      this.editarGrado();
    } else {
      this.guardarGrado();
    }
  }

  public listarProfesores() {
    this.profesorService.listarProfesores().subscribe(
      resp => {
        this.profesores = resp;
      },
      err => {
        console.log(err);
      }
    );
  }  
  
  public listarGrados() {
    this.gradoService.listarGrados().subscribe(
      resp => {
        this.grados = resp;
      },
      err => {
        console.log(err);
      }
    );
  }

  public guardarGrado(): void {
    const alumno = new Grado(this.nombre, this.profesor);
    this.gradoService.guardarGrado(alumno).subscribe(
      resp => {
        alert(resp.mensaje);
      console.log(resp);
      this.listarGrados();
      this.reset();
      },
      err => {
        console.log(err);
        alert(err.error.mensaje);
      }
    );
  }

  public editarGrado(): void {
    const grado = new Grado(this.nombre, this.profesor);
    console.log(grado);
    console.log(this.idGrado);
    this.gradoService.editarGrado(grado, this.idGrado).subscribe(
      resp => {
        alert(resp.mensaje);
        console.log(resp);
        this.listarGrados();
        this.reset();
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

  public eliminarGrado(id: number): void {
    this.gradoService.eliminarGrado(id).subscribe(
      resp => {
        alert(resp.mensaje);
      console.log(resp);
      this.listarGrados();
      this.reset();
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }
}
