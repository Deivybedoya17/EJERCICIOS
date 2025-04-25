//13. Crear una clase Cliente con un atributo privado saldo y un método privado
// calcularDescuento() que se utilice dentro de un método público
// aplicarDescuento()

class cliente {
    #saldo;
    constructor(saldo) {
        this.#saldo = saldo;
    }
    #calcularDescuento(descuento) {
        return this.#saldo - (this.#saldo * descuento / 100);
    }
    aplicarDescuento(descuento) {
        const nuevoSaldo = this.#calcularDescuento(descuento);
        console.log(`El saldo después del descuento es: ${nuevoSaldo}`);
    }
}

const cliente1 = new cliente(1000);
cliente1.aplicarDescuento(30);

