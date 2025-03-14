// 12.Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.

let numero = 1;
let n = parseFloat(prompt("ingrese el numero n"))

function calcularSumaCuadrados(n) {
    let suma = 0;

    for (let index = 0; index <= n; index++) {
        suma += index*index;  
    } 

    return suma;
}

console.log(calcularSumaCuadrados (n));