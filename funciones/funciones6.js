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