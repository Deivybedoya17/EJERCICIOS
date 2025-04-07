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
        console.log(this.#nombre +" esta caminando")

    }
    getNombre(){
        return this.#nombre
    }

    getedad(){
        return this.edad;
    }
    setedad(edad){
        this.edad = edad;

    }
}

// const Persona1 = new Persona ("Deivy")
// Persona1.caminar()
// console.log(Persona1.getNombre())


class Empleado extends Persona {
    #salario
    constructor(nombre, salario) {
        super(nombre);
        this.#salario = salario;
    }

    trabajar(){
        console.log(this.getNombre() + " esta trabajando")
    }

    getsalario(){
        return this.#salario;
    }

    setsalario(salario){
        this.#salario = salario;
        console.log("El salario esta actualizado"); 
    }
}

const empleado1 = new Empleado("Juan", 2000);
empleado1.trabajar();
console.log("Salario inicial:", empleado1.getsalario()); 
empleado1.setsalario(2500); 
console.log("Nuevo salario:", empleado1.getsalario()); 