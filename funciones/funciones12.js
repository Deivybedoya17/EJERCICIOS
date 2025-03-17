// 12. Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje informando 
// si el estudiante aprobó o no la materia, para que la materia se de como aprobada el promedio del estudiante debe ser mayor o igual a 3,0.

function notas() {
    let nota1 = parseFloat(prompt("ingrese la nota 1"))
    let nota2 = parseFloat(prompt("ingrese la nota 2"))
    let nota3 = parseFloat(prompt("ingrese la nota 3"))
    let nota4 = parseFloat(prompt("ingrese la nota 4"))
    let nota5 = parseFloat(prompt("ingrese la nota 5"))
    return [nota1,nota2,nota3,nota4,nota5]
}

function promedio(nota1,nota2,nota3,nota4,nota5) {
    let suma = nota1+nota2+nota3+nota4+nota5
    let resultado = suma/5
    resultado = parseFloat(resultado.toFixed(2))
    return resultado
}

let notasEstudiante = notas()
if (notasEstudiante) {
    let resultado = promedio(...notasEstudiante)
    if(resultado >= 3.0)
        alert(`el estudiante aprobo ${resultado}`)
    else{
        alert(`el estudiante reprobo ${resultado}`)
    }
}