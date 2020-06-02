
var nombre = document.getElementById("nombre")
var edad = document.getElementById("edad")
var nacimiento = document.getElementById("nacimiento")
var genero = document.getElementById("genero")


function enviar (){
    alert("Tu nombre es " + nombre.value + ", tienes " + edad.value + " años, naciste el " + nacimiento.value + " y sos " + genero.value)
}

document.getElementById("boton").onclick = enviar;
