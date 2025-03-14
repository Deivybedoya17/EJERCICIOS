// 1.Dada la cadena “Javascript es un buen lenguaje”:
// a) Leer e imprimir los elementos de índices 3, 6, 8
// b) Recorra la cadena usando ciclo for

// let cadena = "javacsript es un buen lenguaje";

// for (let index = 0; index < cadena.length; index++){
//     console.log(cadena[index])
// };
// console.log("");
// console.log(cadena[3]);
// console.log(cadena[6]);
// console.log(cadena[w


let contador = 1;
while (contador <=100){
    console.log(contador)
    contador++;
} 
console.log("-----------------------")
//el break rompe abruytamente el ciclo

for(let i = 0; i<10;i++){
    if(i ===5) {
break
    }
    console.log("numero:", i);
}

console.log("-----------------------")
// usamos continuo cuando queremos saltar de una interacion a otra

for(let i = 0; i<10;i++){
    if(i === 5){
        continue
    }
    console.log("numero:", i);
}

//do-white
// Es una estructura de control que
// ejecuta un bloque de código al menos una vez, y
// luego sigue repitiendo el ciclo mientras una
// condición sea verdadera. La diferencia principal
// con el ciclo while es que el do-while evalúa
// la condición después de ejecutar el bloque de
// código,
// garantizando que se ejecute al menos una vez.


let i= 0;
do {
    console.log(i);
    i++
} while (i<5)

