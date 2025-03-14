// 8. Cree un programa que muestre los números impares entre 1 y n.

let numero = parseInt(prompt("Ingresa un número natural:"));
// Verifica si el número es válido
if (numero < 1) {
  alert("Por favor, ingresa un número natural (mayor o igual a 1).");
} else {
  // Recorre los números desde 1 hasta el número ingresado
  for (let i = 1; i <= numero; i++) {
    // Verifica si el número actual es impar
    if (i % 2 !== 0) {
      // Si es impar, muestra el número
      alert("Número impar: " + i);
    }
  }
}