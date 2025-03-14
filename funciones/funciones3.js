/*3. Escriba una función que tenga como parámetro un nombre y retorne la cadena “Hola Juan”, por ejemplo si el nombre pasado es Juan.*/

function nombreF (nombre = `deivy`){
    return (`hola,${nombre}`)
}

let resultado = prompt("ingrese su nombre")
alert(`${nombreF(resultado)}`)


