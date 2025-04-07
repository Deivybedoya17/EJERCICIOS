// 5. Crear una clase base Vehiculo que tenga un constructor con parámetros de
// peso y velocidad máxima, e implemente un método mover() que imprima un
// mensaje genérico. Luego, crear dos subclases Carro y Bicicleta 

class Vehiculo {
    constructor(peso, velocidadmaxima) {
        this.peso = peso;
        this.velocidadmaxima = velocidadmaxima;
    }

    mover(){
        console.log("el carro se esta moviendo");
        
    }
}

class Carro extends Vehiculo {
    constructor(peso, velocidadmaxima) {
        super();
        
    }
}

class  Bicicleta extends Vehiculo{
    constructor(peso, velocidadmaxima) {
        super();
    }
}