// 10. Escriba una función la cual reciba una cadena como parámetro y ésta retorne la
// misma cadena pero sin sus vocales.

function eliminarVocales(cadena) { // Defini una función llamada "eliminarVocales" que recibe un parámetro "cadena" (string)
    let resultado = ''; // Creo una variable "resultado" inicializada como string vacío para almacenar el resultado final
    for (let i = 0; i < cadena.length; i++) { // Inicia un bucle que recorre cada carácter de la cadena, desde el índice 0 hasta la longitud de la cadena
        let letra = cadena[i]; // Guarda el carácter actual en la variable "letra" usando el índice i
        if (letra != 'a' && letra != 'e' && letra != 'i' && letra != 'o' && letra != 'u' && // Comprueba si la letra NO es una vocal minúscula
            letra != 'A' && letra != 'E' && letra != 'I' && letra != 'O' && letra != 'U') { // ni una vocal mayúscula
            resultado = resultado + letra; // Si no es vocal, añade la letra al string "resultado"
        } // Si es vocal, simplemente se salta y no se agrega al resultado
    }
    return resultado; // Devuelve el string final sin vocales
}

console.log(eliminarVocales("Hola Mundo")); // Llama a la función con "Hola Mundo" y muestra "Hl Mnd" en la consola
console.log(eliminarVocales("JavaScript")); // Llama a la función con "JavaScript" y muestra "JvScrpt" en la consola