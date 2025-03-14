//10. Cree un programa que tome un número real e imprima su valor absoluto.

let numero = parseFloat(prompt("Ingrese un numero: "))

if (numero >= 0){
    alert(`El numero ingresado ${numero} como valor absoluto es ${numero}.`)
}else{
    alert(`El numero ingresado ${numero} convertido a valor absoluto es ${numero*(-1)}`) 
}