import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoGradoComponent } from './componentes/alumno-grado/alumno-grado.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { GradoComponent } from './componentes/grado/grado.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "alumnos", component: AlumnosComponent
  },
  {
    path: "profesores", component: ProfesorComponent
  },
  {
    path: "grado", component: GradoComponent
  },
  {
    path: "grado-alumno", component: AlumnoGradoComponent
  },
  {
    path: "**", redirectTo: "", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
