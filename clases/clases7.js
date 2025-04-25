// 7. Crear una clase Coche con un método privado encenderMotor() y un método
// público conducir() que llame al método privado.


class Coche {
    #encenderMotor() {
        console.log("El motor se ha encendido.");
    }

    constructor(nombre) {
        this.nombre = nombre;
    }

    conducir() {
        this.#encenderMotor(); // Llama al método privado
        console.log(`El ${this.nombre} se está conduciendo.`); 
    }
}


const miCoche = new Coche("Toyota");
miCoche.conducir();
