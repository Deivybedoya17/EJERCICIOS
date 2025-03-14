// 11. Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los
// resultados

let dado1 = Math.floor(Math.random() * 6) + 1 
let dado2 = Math.floor(Math.random() * 6) + 1
let resultado = dado1 +dado2

console.log(`El dado uno arrojo: ${dado1}`)
console.log(`El dado dos arrojo: ${dado2}`)
console.log(`La suma de los dados es: ${resultado}`)