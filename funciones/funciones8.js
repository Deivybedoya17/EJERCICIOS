//8. Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva
//la primera letra del nombre.
let nombre = prompt("Ingrese un nombre");
function obtenerPrimeraLetra(nombre) {
    return nombre.charAt(0);
}
alert(`La primera letra del nombre es: ${obtenerPrimeraLetra(nombre)}`);