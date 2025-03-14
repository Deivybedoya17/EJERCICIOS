/*7. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.*/
let num = parseInt(prompt("Ingrese un número entre 1 y 15"));
let primo = true;
// Condicional
if (num === 1) {
    primo = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
}   

if (primo) {
    alert("El número es primo");
} else {
    alert("El número no es primo");
}