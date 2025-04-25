class Producto {
    #precio; 
    constructor(precio = 0) {
        this.#precio = precio;
    }
    setPrecio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this.#precio = nuevoPrecio;
        } else {
            console.error("El precio no puede ser negativo.");
        }
    }
    getPrecio() {
        return this.#precio;
    }
}
// Ejemplo de uso
const producto = new Producto();
producto.setPrecio(100);
console.log(producto.getPrecio()); // 100