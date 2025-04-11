//6. Crear una clase Universidad con un atributo estático numEstudiantes y un
// método estático registrarEstudiante()

class Universidad {
    static numEstudiantes = 0;
    
    constructor(estudiante, edad) {
        this.estudiante = estudiante;
        this.edad = edad;
    }
    static registrarEstudiante() {
        Universidad.numEstudiantes++; 
    }

    estudiantesregistrados(){
        console.log(`el estudiante ${this.estudiante} tiene ${this.edad} años`);
        
    }
}

const deivy = new Universidad("deivy", 23)
Universidad.registrarEstudiante();
deivy.estudiantesregistrados();

const hugo = new Universidad("ana", 25)
Universidad.registrarEstudiante();
hugo.estudiantesregistrados();

console.log("Número de estudiantes registrados:", Universidad.numEstudiantes);
