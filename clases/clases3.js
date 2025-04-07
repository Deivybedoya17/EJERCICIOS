// 3. Crear una clase CuentaBancaria que tenga un saldo privado y métodos
// públicos para depositar y retirar dinero


class CuentaBancaria{
    #saldo; // privado
    constructor(saldo){
        this.#saldo = saldo;
    }

    depositar(cantidad){
        this.#saldo = this.#saldo + cantidad; //depositar el dinero
    }

    retirar(cantidad){
        this.#saldo = this.#saldo - cantidad;//retirar el dinero
    }

    getSaldo(){
        return this.#saldo;
    }
}

const cuenta1 = new CuentaBancaria(10000);
console.log("Saldo actual ", cuenta1.getSaldo());
cuenta1.depositar(20000);
console.log("Saldo actual ", cuenta1.getSaldo());
cuenta1.retirar(5000);
console.log("Saldo actual ", cuenta1.getSaldo());