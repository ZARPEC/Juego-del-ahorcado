var dibujo = document.getElementById("areaDibujo");
var puntero = dibujo.getContext("2d");

puntero.fillStyle = "white";
puntero.fillRect(0, 0, 500, 450);


var letras = document.getElementById("areaLetras");
var punteroL = letras.getContext("2d");

punteroL.fillStyle = "white"
punteroL.fillRect(0, 0, 500, 100)

var cantidad;

function crearBase(x, y, a, l) {
    puntero.fillStyle = "#0A3871";
    puntero.fillRect(x, y, a, l)

}



function Palabra() {
    var palabras = ["laptop", "celular", "cuaderno"];

    var selec = palabras[Math.floor(Math.random() * palabras.length)];

    var cantidad = selec.length;


    var x = 10;

    for (var numero = 0; numero < cantidad; numero++) {
        var letra = selec.charAt(numero);
        DibLinea(x);
        DibLetra(x + 25, letra)
        x += 65;
        console.log(letra);
    }

    console.log(cantidad);
    console.log(selec);


}

function DibLinea(x) {

    punteroL.fillStyle = "#0A3871";

    punteroL.fillRect(x, 50, 50, 3);
}

function DibLetra(x, letra) {

    punteroL.textAlign = "center";
    punteroL.font = "30pt arial"
    punteroL.fillStyle = "black"
    punteroL.lineWidth = 4;
    punteroL.strokeText(letra, x, 45);
}




//barra vertical
crearBase(50, 50, 3, 400);
//arriba
crearBase(50, 50, 400, 3);

//base
crearBase(0, 450, 450, 3);

Palabra();





//214+35