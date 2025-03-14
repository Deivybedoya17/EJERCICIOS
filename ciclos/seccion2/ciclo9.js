//9. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra

let letra;

do {
    letra = prompt("ingresar letra ")
} while (letra != "S" && letra != "s");

alert(`encontraste la letra ${letra}`)