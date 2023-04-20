/*
Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

let numero = Math.floor(Math.random() * 10 + 1);
let usuario = 0;
let intentos = 0;
let salida = "Bienvenidos a este maravilloso juego de números";

function jugar() {
  usuario = parseInt(document.getElementById("text1").value);

  if (usuario !== numero) {
    salida = `${usuario} No es el número, intentá nuevamente`;
    intentos++;
  }

  if (usuario == numero) {
    salida = `${usuario} Es el número, Felicidades !!!`;
    document.getElementById("mostrarNumero").innerHTML = numero;
  }

  document.getElementById(
    "mostrarResultado"
  ).innerHTML = `${salida}. Este es su intento número: ${intentos}.`;
  document.getElementById("text1").select();
}

function reiniciarJugada() {
  let numero = Math.floor(Math.random() * 10 + 1);
  document.getElementById("mostrarNumero").innerHTML = "?";
  document.getElementById("mostrarResultado").innerHTML = "Juguemos de nuevo";
  document.getElementById("text1").value = "";
  document.getElementById("text1").focus();
}
