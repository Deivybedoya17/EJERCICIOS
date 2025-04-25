//12. Crear una clase Escuela con un atributo estático numEstudiantes que se
// incremente cada vez que se cree un nuevo objeto Estudiante


class Escuela {
    static numEstudiantes = 0;
    constructor() {
        Escuela.numEstudiantes++;
    }
}
class Estudiante extends Escuela {
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }
}

const estudiante1 = new Estudiante("Juan");
const estudiante2 = new Estudiante("María");
const estudiante3 = new Estudiante("deivy");
const estudiante4 = new Estudiante("Carlos");

console.log(Escuela.numEstudiantes); 