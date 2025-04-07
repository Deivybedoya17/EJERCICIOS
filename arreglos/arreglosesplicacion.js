// Arreglo de dimensión 1 o unidimensionales
console.log(arregloUnidimensional[0]);
//imprime: 2


// Arreglo de dimensión 2 o bidimensional
let arregloBidimensional = [[1, 3, 60], ["w", "e", "q"], [true, false, true]];
console.log(arregloBidimensional[0][1]);//imprime: 3
console.log(arregloBidimensional[1][2]);//imprime: q

// Arreglos de dimensión superior (dimensión 3 o más)

let arregloDimension3 = [ [[1, 5, 8], [true]], [[true, false, true], [true]] ];
console.log(arregloDimension3[0][1][0]);//imprime: true
console.log(arregloDimension3[1][0][1]);//imprime: false



// Usando lo anteriormente expuesto, manejando el número de índices correctos en cada caso, resuelva:
// 1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:
// a) Usar dos índices para leer e imprimir el elemento z
// b) Usar dos índices para leer e imprimir el elemento 789
// c) Usar dos índices para leer e imprimir el elemento 0
// d) Usar dos índices para leer e imprimir el elemento false

// 2. Dado el arreglo [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]
// a) Usar tres índices para leer e imprimir el elemento ?
// b) Usar tres índices para leer e imprimir el elemento 66
// c) Usar tres índices para leer e imprimir el elemento true
// d) Usar tres índices para leer e imprimir el elemento %
// Complete sin usar el intérprete de Javascript(úselo al final para verificar sus respuestas):
// e) arreglo[0][0][2] devolverá ____
// f) arreglo[2][0][0] devolverá ____
// g) arreglo[1][0][3] devolverá ____
// h) arreglo[0][1][1] devolverá __________

// 3. Dado el arreglo [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
// a) Leer e imprimir el elemento true
// b) Leer e imprimir el elemento 1
// c) Leer e imprimir el elemento 77
// d) Leer e imprimir el elemento 88
// e) Leer e imprimir el elemento ¿

// 4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]
// a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log
// b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log
// c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log
// d) Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
// e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
// f) Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreg
