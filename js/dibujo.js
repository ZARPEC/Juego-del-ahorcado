var dibujo = document.getElementById("areaDibujo");
var puntero = dibujo.getContext("2d");

puntero.fillStyle = "white";
puntero.fillRect(0, 0, 500, 500);


var letras = document.getElementById("areaLetras");
var punteroL = letras.getContext("2d");

punteroL.fillStyle = "black"
punteroL.fillRect(0, 0, 500, 100)

function crearBase(x, y, a, l) {
    puntero.fillStyle = "#0A3871";
    puntero.fillRect(x, y, a, l)

}

function Palabra() {


}

crearBase(50, 50, 3, 400);
crearBase(50, 50, 400, 3)
crearBase(0, 450, 450, 3)


//214+35