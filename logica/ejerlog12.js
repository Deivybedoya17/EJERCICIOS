// 12. Cree un programa que realice la conversión de grados Celsius a Fahrenheit

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: ")); 
if (isNaN(celsius)) { // Validmos si la entrada no es un número
    alert("Por favor, ingrese un valor numérico válido.");
} else {
    let fahrenheit = (celsius * 1.8) + 32; // Realizamos la conversión directamente en una variable con nombre más claro
    alert(`La conversión de ${celsius}°C a Fahrenheit es ${fahrenheit.toFixed(2)}°F`); // Muestra el resultado con 2 decimales y un espacio claro
}