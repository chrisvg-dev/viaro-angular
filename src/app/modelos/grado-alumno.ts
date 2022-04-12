export class GradoAlumno {
    public id: number;
    public alumno: any;
    public grado: any;
    public seccion: string;

    constructor(alumno_id: any, grado_id: any, seccion: string){
        this.id = 0;
        this.alumno = alumno_id;
        this.grado = grado_id;
        this.seccion = seccion;
    }
}
