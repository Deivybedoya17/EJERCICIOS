/*1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

let nombre = prompt("¿Cual es tu nombre?: ")
let edadActual = parseInt(prompt("¿Cual es tu edad actual?: ")) 
let añosFuturos = parseInt(prompt("Ingresa los años que quieres calcular: ")) 
let añosTotal = edadActual+añosFuturos

alert(`Señor (a) ${nombre} su edad dentro de ${añosFuturos} años sera de ${añosTotal} años`) 
