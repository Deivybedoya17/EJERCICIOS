// 9. Crear una clase Empleado y una subclase Gerente que sobrescriba un
// método trabajar()

class Empleado {
    constructor(nombre) {
        this.nombre = nombre
    }
    consultar(){
        console.log(`este es mi nombre ${this.nombre} y soy un empleado`);
    }
    trabajar(){
        console.log(`esta trabajando como empleado`);
        
    }
}

class Gerente extends Empleado {
    constructor(nombre) {
        super(nombre)
    }
    consultar(){
        console.log(`este es mi nombres ${super.this} y soy el gerente`);
    }
    trabajar(){
        console.log(`esta trabajando como gerente`);
        
    }
}

const persona1 = new Empleado("deivy")
const persona2 = new Gerente("Sofia")

persona1.consultar();
persona1.trabajar();

persona2.consultar();
persona2.trabajar();
