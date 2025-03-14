/*6. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

let num = parseInt(prompt("Ingrese un número"));

// Condicional
if (num % 5 === 0) {
    alert("El número es divisible entre cinco");
} else {
    alert("El número no es divisible entre cinco");
}

// Switch-case
switch (num % 5) {
    case 0:
        alert("El número es divisible entre cinco");
        break;
    default:
        alert("El número no es divisible entre cinco");
        break;
}