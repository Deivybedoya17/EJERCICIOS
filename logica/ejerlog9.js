//9. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.

let cantidad = parseFloat(prompt("Ingrese una cantidad: ")) 
let porcentaje = parseFloat(prompt("Ingrese el procentaje a calcular: ")) 

let resultado = cantidad * (porcentaje/100) 

alert(`La cantidad ${cantidad} aplicandole un porcentaje del ${porcentaje} da como resultado ${resultado}`)