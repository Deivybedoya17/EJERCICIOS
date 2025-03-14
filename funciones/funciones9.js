//9. Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
//de vocales que contiene la cadena.

let cadena = prompt("Ingrese una cadena de texto");
function contarVocales(cadena) {
    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}