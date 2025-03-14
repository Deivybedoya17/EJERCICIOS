// 6. Escriba una función con el nombre de esVocal() que tome un carácter , devuelva
// True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso
// contrario.

let palabra = prompt("ingrese una vocal")

function esVocal(palabra) {
    let vocales = [ "a", "e", "i", "o", "u"]
    if (vocales.includes(palabra)){
        return "es vocal";
    }else{
        return "no es vocal";
    }
}

alert(esVocal(palabra))