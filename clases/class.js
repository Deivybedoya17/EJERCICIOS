// Clase Persona
// Atributo #nombre (privado)
// Método público caminar() que imprima "[nombre] está caminando."
// Clase Empleado que extiende Persona
// Atributo #salario (privado)
// Método público trabajar() que imprima "[nombre] está trabajando."
// Método público setSalario(salario) y getSalario()
// Método público setEdad(edad) que llama al método de la clase base Persona
// Clase CuentaBancaria
// Atributo privado #saldo
// Método privado #actualizarSaldo(monto)
// Métodos públicos depositar(monto) y retirar(monto) que usen #actualizarSaldo

// Clase base Vehiculo
// Atributos públicos marca, modelo
// Método privado #encenderMotor()
// Método público arrancar() que use #encenderMotor
// Método mover() (sobrescrito por subclases)
// Subclases Coche y Bicicleta de Vehiculo
// Sobrescriben mover() con un mensaje distinto
// Clase EmpresaTransporte
// Atributo estático totalEmpleados
// Método estático registrarEmpleado() que incremente ese número
// Método asignarVehiculo(empleado, vehiculo) que imprime una relación

class Persona {
    #nombre
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.edad = edad;
    }
    caminar(){
        console.log(`${this.#nombre} esta caminando`);
    }
    getNombre(){
        return this.#nombre;
    }

    getedad(){
        return this.edad;
    }
    setedad(edad){
        this.edad = edad;

    }
}

class Empleado extends Persona {
    #salario
<<<<<<< HEAD
    constructor(nombre, edad, salario) {
=======
    constructor(nombre, edad,salario) {
>>>>>>> 26f1fc2100ce6a91e4de7dfabd7cc86bfd0544c3
        super(nombre, edad);
        this.#salario = salario;
    }

    trabajar(){
<<<<<<< HEAD
        console.log(`${this.getNombre()} esta trabajando`);
=======
        console.log(`${this.getNombre()} esta trabajando`)
>>>>>>> 26f1fc2100ce6a91e4de7dfabd7cc86bfd0544c3
    }

    getsalario(){
        return this.#salario;
    }

    setsalario(salario){
        this.#salario = salario;
        console.log("El salario esta actualizado a: "+ this.#salario);
    }
    getedad(){
        return super.getedad()
    }
    setedad(edad){
        super.setedad(edad);

    }

    getedad(){
        return super.getedad();
    }

    setedad(edad) {
        super.setedad(edad);
        console.log("La edad esta actualizada");
    }
}

<<<<<<< HEAD
const empleado1 = new Empleado("Juan", 30, 2000);
empleado1.trabajar();
console.log("Salario inicial:", empleado1.getsalario()); 
empleado1.setsalario(2500); 
console.log("Nuevo salario:", empleado1.getsalario());
console.log("Edad inicial:", empleado1.getedad());
empleado1.setedad(31)
console.log("Nueva edad:", empleado1.getedad())

class CuentaBancaria {
    #saldo
    #actualizarSaldo
    constructor(saldo){
        this.#saldo = saldo;
    }


    
=======
const empleado1 = new Empleado("juan", 25,2000000)
empleado1.trabajar();
console.log("salario inicial:", empleado1.getsalario());
empleado1.setsalario(2500000); // Ahora se proporciona un valor para el salario
console.log("nuevo salario:",empleado1.getsalario());
console.log("Edad inicial:",empleado1.getedad());
empleado1.setedad(31)
console.log("nuevo edad:",empleado1.getedad());

class CuentaBancaria{
    #saldo
    constructor(saldo) {
        this.#saldo = saldo;
    }

>>>>>>> 26f1fc2100ce6a91e4de7dfabd7cc86bfd0544c3
    #actualizarSaldo(monto){
        this.#saldo += monto;
    }
    depositar(monto){
        this.#actualizarSaldo(monto);
<<<<<<< HEAD
        console.log(`Se ha depositado ${monto}. Nuevo saldo: ${this.#saldo}`);
    }
    retirar(monto){
        this.#actualizarSaldo(-monto);
        console.log(`Se ha retirado ${monto}. Nuevo saldo: ${this.#saldo}`);
    }
    getSaldo(){
        return this.#saldo;
    }
}
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
cuenta.retirar(200);
console.log("Saldo final:", cuenta.getSaldo());

class vehiculo {
    
=======
        console.log(`se ha depositado ${monto}. Nuevo saldo ${this.#saldo}`);
    }
    retirar(monto){
        this.#actualizarSaldo(-monto);
        console.log(`se ha retirado ${monto}. nuevo saldo ${this.#saldo}`);
    }
    getsaldo(){
        return this.#saldo
    }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
cuenta.retirar(200);
console.log("saldo final:", cuenta.getsaldo());


class vehiculo {
>>>>>>> 26f1fc2100ce6a91e4de7dfabd7cc86bfd0544c3
    constructor(parameters) {
        
    }
}
<<<<<<< HEAD
=======

>>>>>>> 26f1fc2100ce6a91e4de7dfabd7cc86bfd0544c3
