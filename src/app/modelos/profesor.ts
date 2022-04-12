export class Profesor {
    public id: number;
    public nombre: string;
    public apellidos: string;
    public genero: string;

    constructor(nombre: string, apellidos: string, genero: string){
        this.id = 0;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.genero = genero;
    }
}