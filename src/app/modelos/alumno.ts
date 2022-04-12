export class Alumno {
    public id: number;
    public nombre: string;
    public apellidos: string;
    public genero: string;
    public fechaNacimiento: string;

    constructor(nombre: string, apellidos: string, genero: string, fechaNacimiento: string){
        this.id = 0;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
    }
}
