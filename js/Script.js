var dibujo = document.getElementById("areaDibujo");
var puntero = dibujo.getContext("2d");

puntero.fillStyle = "white";
puntero.fillRect(0, 0, 600, 450);

/* canvas letras 
var letras = document.getElementById("areaLetras");
var punteroL = letras.getContext("2d");

punteroL.fillStyle = "white"
punteroL.fillRect(0, 0, 600, 100)
*/
var cantidad;
var letrapresionada;
var selec;
var letra;
var contadorerr = 1;

const $btninicio = document.querySelector('.inic'),
    $juego = document.querySelector('.juego'),
    $botonesIni = document.querySelector('.botonesIni'),
    $logo = document.querySelector('.logo'),
    $btnadd = document.querySelector('.agg'),
    $addWord = document.getElementById('addWord'),
    $btnguardar = document.getElementById('guarPal');





document.addEventListener('click', e => {
    if (e.target === $btninicio) {
        $juego.classList.toggle('active');
        $botonesIni.classList.toggle('active');

    } else if (e.target === $logo) {
        $juego.classList.remove('active');
        $botonesIni.classList.remove('active');
    } else if (e.target === $btnadd) {
        $addWord.setAttribute('id', 'active');
        $botonesIni.classList.toggle('active');
    }
});
x2 = 90
if (cantidad <= 6) {
    x2 = 80
}


var nueva;

function agregarPal() {
    var palabraTomada = document.getElementById("AggInput").value;
    console.log(palabraTomada);
    if (palabraTomada) {
        NewWord.push(palabraTomada);
        document.addEventListener('click', s => {
            if (s.target == $btnguardar) {
                $addWord.setAttribute('id', 'addWord');
                $juego.classList.toggle('active');
            }
        })
        iniciar();
    } else if (!palabraTomada) {
        alert("no")
    }

}

document.addEventListener('keydown', (evt) => {

    //Permite el uso de las teclas de Home, End y las flechas de navegacion
    if (evt.key == 'Backspace' ||
        evt.key.includes('Arrow') ||
        evt.key == 'End' ||
        evt.key == 'Home') return;

    //Si la tecla no es una letra, termina el evento
    if (!/^[a-zA-Z]$/.test(evt.key)) {
        evt.preventDefault();
        return;
    }

    letrapresionada = evt.key;
    console.log(letrapresionada);
    for (numero = 0; numero < cantidad; numero++) {
        letra = selec.charAt(numero);
        var clase = numero.toString();
        if (letrapresionada == letra) {
            console.log("la clase es" +
                clase)
            var pos = document.getElementById(clase);
            pos.innerHTML = letra;
            console.log("la letra coincide " + letra)
                //barra vertical
        }
    }
    x2 += 65
});



function crearBase(x, y, a, l) {
    puntero.fillStyle = "#0A3871";
    puntero.fillRect(x, y, a, l)

}

var palabras = ["laptop", "celular", "cuaderno"];
var NewWord = [];
var selec
var cantidad
var letra;

var cantNueva;
var selecNueva

function iniciar() {

    if (NewWord.length === 1) {
        selec = NewWord[Math.floor(Math.random() * NewWord.length)];
        cantidad = selec.length;
    } else {
        selec = palabras[Math.floor(Math.random() * palabras.length)];
        cantidad = selec.length;
    }
    console.log(cantidad);

    for (var numero = 0; numero < cantidad; numero++) {
        letra = selec.charAt(numero);
        // DibLetra(x + 25, letra)
        console.log(letra)

    }
    agregarEsp();
    console.log(cantidad);
    console.log(selec);
    document.getElementById("AggInput").value = "";


}





function agregarEsp() {
    var columnas = cantidad;

    for (var i = 0; i < 1; i++) {
        var filaActual = document.getElementById("areaLetras").insertRow(i);
        for (var j = 0; j < columnas; j++) {
            var celda = filaActual.insertCell(j);
            celda.setAttribute('id', j);
        }
    }
}

function validarLetra(letra) {

    for (numero = 0; numero < cantidad; numero++) {

    }
}
/* canvas de letras
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
*/
const refresh = document.getElementById("recargar");
refresh.addEventListener('click', _ => {
    location.reload();
});




//base
crearBase(70, 450, 450, 3);



//214+35