/*3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.*/

let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

if (num1 > num2) {
    alert("El número mayor es: " + num1);
} else if (num2 > num1) {
    alert("El número mayor es: " + num2);
} else {
    alert("Los números son iguales");
}


