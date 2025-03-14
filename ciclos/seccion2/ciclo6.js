
let n = parseInt(prompt("ingrese el numero que quiereas"))
let acumulador = 0;
if (n < 1) {
    alert(`el numero negativo no son naturales`)
}else{
    let inicio = 1;
    while (inicio <= n) { 
        acumulador = acumulador + inicio;
        inicio += 1;
    };
}
alert(`suma de los primeros numeros${acumulador}`)