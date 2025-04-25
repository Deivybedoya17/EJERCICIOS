
class Animal {
    hacerSonido() {
        console.log("Sonido genéral de animal");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau Guau");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau Miau");
    }
}
const perro = new Perro();
perro.hacerSonido(); 
const gato = new Gato();
gato.hacerSonido(); 
const animal = new Animal();
animal.hacerSonido(); 