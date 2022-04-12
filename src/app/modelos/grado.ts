export class Grado {
    public id: number;
    public nombre: string;
    public profesor: any;

    constructor(nombre: string, profesor: any){
        this.id = 0;
        this.nombre = nombre;
        this.profesor = profesor;
    }
}