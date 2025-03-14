/*2. Escriba una función que reciba el lado de un cubo y retorne su volumen. */

function volumen (lado){
    let volumen = (lado**3);
    return volumen
}

let ladodeunCubo = parseInt(prompt(`ingrese el lado de un cubo`))
alert (`el volumen de un cubo es ${volumen(ladodeunCubo)}`)


