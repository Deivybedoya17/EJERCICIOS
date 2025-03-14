/*5. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/

let num = parseInt(prompt("Ingrese un número"));

// Condicional
if (num % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}

// Switch-case
switch (num % 2) {
    case 0:
        alert("El número es par");
        break;
    default:
        alert("El número es impar");
        break;
}
