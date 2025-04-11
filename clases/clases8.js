//8. Crear una clase Empleado con atributos nombre y salario. Que implemente
// un método trabajar(). Implemente encapsulación.

class Empleado {
    #nombre
    #salario
    constructor(nombre, salario) {
        this.#nombre = nombre;
        this.#salario = salario;
    }
    getnombre(){
        return this.#nombre
    }
    getsalario(){
        return this.#salario
    }
    setnombre(nombre){
        this.#nombre = nombre;
    }
    setsalario(salario){
        if (salario >= 0) {
            this.#salario = salario;
        }else{
            console.log("este salario no esta disponible");
        }
    }
    trabajar(){
        console.log(`el trabajador ${this.#nombre} esta ganando ${this.#salario} pesos colombianos`);
        
    }
}
const persona1 = new Empleado("deivy",2100000)
persona1.trabajar();

persona1.getsalario(2500000)
persona1.trabajar();

console.log(persona1.getnombre());
console.log(persona1.getsalario());


