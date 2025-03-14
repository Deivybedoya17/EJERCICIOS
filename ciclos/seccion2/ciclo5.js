// 5. Cree un programa que muestre los números naturales de 1 a n. Use ciclo while.

let n = parseInt(prompt("ingrese el numero que quiereas"))
let inicio = 1;
if (n < 1) {
    alert(`el numero negativo no son naturales`)
}else{
    while (inicio <= n) {
        alert(`numero ${inicio}`)
        inicio += 1;
    };
}