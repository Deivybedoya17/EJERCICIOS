// Clase base Vehiculo
class Vehiculo {
    mover() {
        console.log("El vehículo se está moviendo.");
    }
}
class Coche extends Vehiculo {
    mover() {
        console.log("El coche está acelerando por la carretera.");
    }
}

class Bicicleta extends Vehiculo {
    mover() {
        console.log("La bicicleta está siendo pedaleada por el ciclista.");
    }
}

const miCoche = new Coche();
miCoche.mover(); 

const miBicicleta = new Bicicleta();
miBicicleta.mover(); 