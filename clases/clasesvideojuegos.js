// clase inventario metodo: ingresarvideojuego, eliminarvideojuego, obtenertodoslosvideosjuegos,actualizarvideojuegos,
// donde haya un arreglo[{nombre,"mario bros", precio 70000, categoria tecnologia]
// clases administrador propiedad: nombre, constraseña y email
// metodos agregarVideojuegos => llama al metodo IngresarVideojuego de inventar

class Inventario {
    #videojuegos;
  
    constructor() {
      this.#videojuegos = [];
    }
  
    ingresarVideojuego(videojuego) {
      this.#videojuegos.push(videojuego);
    }
  
    eliminarVideojuego(nombre) {
      this.#videojuegos = this.#videojuegos.filter(vj => vj.nombre !== nombre);
    }
  
    actualizarVideojuego(nombre, nuevoPrecio, nuevaCategoria) {
      for (let videojuego of this.#videojuegos) {
        if (videojuego.nombre === nombre) {
          videojuego.precio = nuevoPrecio;
          videojuego.categoria = nuevaCategoria;
        }
      }
    }
  
    obtenerTodosVideojuegos() {
      return this.#videojuegos;
    }
  }
  // una compisicion
  class Administrador {
    constructor(nombre, contrasena, email, inventario) {
      this.nombre = nombre;
      this.contrasena = contrasena;
      this.email = email;
      this.inventario = inventario; // Recibe un objeto Inventario
    }
  
    agregarVideojuego(videojuego) {
      this.inventario.ingresarVideojuego(videojuego);
    }
  
    eliminarVideojuego(nombre) {
      this.inventario.eliminarVideojuego(nombre);
    }
  
    actualizarVideojuego(nombre, nuevoPrecio, nuevaCategoria) {
      this.inventario.actualizarVideojuego(nombre, nuevoPrecio, nuevaCategoria);
    }
  
    mostrarVideojuegos() {
      console.log(this.inventario.obtenerTodosVideojuegos());
    }
  }  
  
const inventario1 = new Inventario();
const admin = new Administrador("Laura", "1234", "laura@email.com", inventario1);
//juegos agregados al inventario
admin.agregarVideojuego({ nombre: "Mario Bros", precio: 70000, categoria: "Plataforma" });
admin.agregarVideojuego({ nombre: "Minecraft", precio: 250000, categoria: "Mundo abierto" });
admin.agregarVideojuego({ nombre: "FIFA 22", precio: 180000, categoria: "Deportes" });
admin.agregarVideojuego({ nombre: "Call of Duty", precio: 220000, categoria: "Acción" });
admin.agregarVideojuego({ nombre: "Zelda", precio: 150000, categoria: "Aventura" });

admin.actualizarVideojuego("Minecraft", 200000, "Sandbox"); // actualizamos video juegos
admin.eliminarVideojuego("Mario Bros");// eliminamos el video juego por el nombre
// admin.eliminarVideojuego("FIFA 22");// eliminamos el video juego por el nombre
// admin.eliminarVideojuego("Call of Duty");// eliminamos el video juego por el nombre
admin.mostrarVideojuegos();// aqui mostramos todos los videos juegos
