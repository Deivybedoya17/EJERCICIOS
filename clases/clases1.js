//1. Crear una clase Persona con un atributo nombre y un método caminar() que
// imprima un mensaje con el nombre.

class Persona {
    constructor(name) {
        this.name = name;
    }
    caminar() {
        console.log(this.name + " está caminando");
    }
}

const deivy = new Persona("deivy");
deivy.caminar();

const juan = new Persona("juan");
juan.caminar();



