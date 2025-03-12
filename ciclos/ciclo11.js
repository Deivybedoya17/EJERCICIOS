// 11. Cree un programa que muestre el promedio de n números, dejándose de solicitar números
// cuando se introduzca el cero.

// Declaramos variables para la suma de los números y la cantidad de números ingresados
let suma = 0;
let cantidad = 0;

// Bucle que solicita números hasta que el usuario ingrese 0
while (true) {
    let numero = parseFloat(prompt("Ingrese un número (0 para salir):")); // Solicitamos un número al usuario
    
    if (numero === 0) { // Si el número es 0, salimos del bucle
        break;
    }
    
    suma += numero; // Sumamos el número ingresado a la variable suma
    cantidad++; // Contamos cuántos números se han ingresado
}

// Calculamos el promedio solo si se ingresaron números válidos
if (cantidad > 0) {
    let promedio = suma / cantidad; // Se calcula el promedio
    console.log("El promedio de los números ingresados es:", promedio); // Mostramos el resultado en la consola
} else {
    console.log("No se ingresaron números para calcular el promedio."); // Mensaje si no se ingresaron números válidos
}

