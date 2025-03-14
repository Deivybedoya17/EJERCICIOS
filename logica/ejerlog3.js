/*3. En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

const interes = (5/100) 
let nombreElectrodoméstico = prompt("Ingrese el nombre del electrodomestico: "); 
let valorElectrodomestico = parseFloat(prompt("Ingrese el valor del electrodomestico: ")); 
let cuotas = parseInt(prompt("¿A cuantas cuotas quiere sacar el credito?: ")); 

let interesMensual = (valorElectrodomestico * interes) 
let interesTotal = (interesMensual * cuotas) 
let cuotaMensual = ((valorElectrodomestico + interesTotal) / cuotas) 

alert(`El valor del electrodomestico '${nombreElectrodoméstico}' es de ${valorElectrodomestico} 
    su credito diferido a ${cuotas} cuotas seria de $${cuotaMensual} pesos mensuales. El total a pagar es ${interesTotal + valorElectrodomestico}`) 