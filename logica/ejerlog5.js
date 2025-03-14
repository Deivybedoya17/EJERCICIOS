// 5. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
const pi = 3.14159
let radio = parseFloat(prompt("Ingrese el radio de circulo: ")) 
let area = (pi*(radio**2))
let perimetro = (2*pi*radio)
let diametro = (2*radio)

alert(`El area del circulo es de ${area} y su diametro es ${perimetro}`)