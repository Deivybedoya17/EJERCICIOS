// 10.Cree un programa que calcule el promedio de 10 números.

let numero1 = parseFloat(prompt("ingrese el numero 1"))
let numero2 = parseFloat(prompt("ingrese el numero 2"))
let numero3 = parseFloat(prompt("ingrese el numero 3"))
let numero4 = parseFloat(prompt("ingrese el numero 4"))
let numero5 = parseFloat(prompt("ingrese el numero 5"))
let numero6 = parseFloat(prompt("ingrese el numero 6")) 
let numero7 = parseFloat(prompt("ingrese el numero 7"))
let numero8 = parseFloat(prompt("ingrese el numero 8"))
let numero9 = parseFloat(prompt("ingrese el numero 9"))
let numero10 = parseFloat(prompt("ingrese el numero 10"))


function promedio (numero1, numero2,numero3, numero4,numero5, numero6, numero7, numero8, numero9, numero10){
    let suma = numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10
    let promedio = suma / 10;
    alert(`el promedio de los numeros es ${promedio}`)

}

promedio(numero1, numero2,numero3, numero4,numero5, numero6, numero7, numero8, numero9, numero10)



