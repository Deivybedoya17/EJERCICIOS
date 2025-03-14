/*2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case.*/

let producto = prompt("Ingrese el nombre de un producto: lentejas, crema, arroz o vino");

// Condicional
if (producto === "lentejas" || producto === "arroz") {
    alert("El producto no paga IVA");
} else if (producto === "vino" || producto === "crema") {
    alert("El producto paga IVA");
} else {
    alert("El producto no existe");
}

// Switch-case
switch (producto) {
    case "lentejas":
    case "arroz":
        alert("El producto no paga IVA");
        break;
    case "vino":
    case "crema":
        alert("El producto paga IVA");
        break;
    default:
        alert("El producto no existe");
        break;
}