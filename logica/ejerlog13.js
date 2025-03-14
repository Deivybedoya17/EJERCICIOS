// 13. Cree un programa que calcule el factorial de 5
let numero = 5; // El número del que queremos el factorial
let factorial = 1; // Inicializamos en 1 porque vamos a multiplicar

for (let index = 1; index <= numero; index++) {
    factorial *= index; // Multiplicamos factorial por cada número desde 1 hasta 5
}

console.log(`El factorial de ${numero} es ${factorial}`); // Mostramos el resultado: 120