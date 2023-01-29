let nombreUsuario = prompt("Nombre y Apellido")

let nombreCompleto = nombreUsuario
console.log(nombreCompleto)

const anio = 2023

let anioNacimiento = parseInt(prompt("Año de nacimiento?"))

let edad =(anio-anioNacimiento)

if (edad >=17){
    alert ("Tienes la edad minima para aprender")
}else if (edad <=15){
    alert("No cumples la edad requerida")
}else{
    alert ("Podrias aprender a manejar moto")
}

console.log(edad)

let auto = prompt("Posees auto propio SI/NO")

for (let i = 0; i < 5; i++){
    let dniTurno = prompt ("Ingrese DNI para programar un turno")
    alert(`Tienes el Nro ${i} para presentarte por la mañana ${dniTurno}`)
}

alert("No se encuentran mas turnos disponibles por esta semana")




