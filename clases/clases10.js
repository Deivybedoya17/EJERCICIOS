// 10. Crear una clase base InstrumentoMusical con un método tocar() que debe
// ser implementado por las clases hijas.

class InstrumentoMusical {
    constructor(name) {
        this.name = name;
    }
    tocar(){
        console.log(`el ${this.name} se esta tocando`);
    }
}

class InstrumentoDeAire extends InstrumentoMusical {
    constructor(name) {
        super(name)
    }
    tocar(){
        console.log(`la ${this.name} se esta tocando`);
    }
}

const instrumento1 = new InstrumentoMusical("guitarra")
instrumento1.tocar();

const instrumento2 = new InstrumentoDeAire("flauta")
instrumento2.tocar();