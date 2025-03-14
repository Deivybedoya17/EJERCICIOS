//4. Cree un programa que tome la base y la altura de un triángulo e imprima su área.
// formula del area de un triangulo es : base*altura/2

let base = parseFloat(prompt("Ingrese la base del triangulo: ")) 
let altura = parseFloat(prompt("Ingrese la altura del triangulo: ")) 
let area = (base*altura)/2 

alert(`El area del triangulo es de ${area}`)