// 2. Cree una función que reciba como argumentos dos números y retorne el mayor de estos números,
// luego haga el llamado a la función y guarde su valor de retorno en una variable e imprima ese valor por
// consola

function numeros(num1, num2) {
    if (num1 > num2)  {
        return num1;
    } else {
        return num2;
    }
}

const result = numeros(10, 20);
console.log(result);
