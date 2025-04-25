class Vehiculo {
    #modelo;
    marca;
    constructor(marca, modelo) {
      this.marca = marca;
      this.#modelo = modelo;   
    }
    // Método privado
    #encenderMotor() {
      console.log("Motor encendido");
    }
    arrancar() {
      this.#encenderMotor();
      console.log(`El vehículo ${this.marca} modelo ${this.#modelo} ha arrancado.`);
    }
  }
  
  const miCarro = new Vehiculo("Toyota", "Corolla");
  miCarro.arrancar(); // Llama al método público
  

  