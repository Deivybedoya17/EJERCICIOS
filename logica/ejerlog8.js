//8. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.

const descuento = (10/100) 
let producto = prompt("Ingrese el nombre del producto: ") 
let precio = parseFloat(prompt("Ingrese el precio del producto: "))
let precioFinal = precio-(precio*descuento)

alert(`El precio del producto '${producto}' es de ${precio} y con el descuento quedaria en ${precioFinal}`)