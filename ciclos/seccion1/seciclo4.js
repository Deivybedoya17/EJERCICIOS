/*4. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.*/

let angulo1 = parseInt(prompt("Ingrese el primer ángulo"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo"));

// Condicional
if (angulo1 + angulo2 + angulo3 === 180) {
    alert("Los ángulos corresponden a un triángulo");
} else {
    alert("Los ángulos no corresponden a un triángulo");
}

// Switch-case
switch (true) {
    case (angulo1 + angulo2 + angulo3 === 180):
        alert("Los ángulos corresponden a un triángulo");
        break;
    default:
        alert("Los ángulos no corresponden a un triángulo");
        break;
}
