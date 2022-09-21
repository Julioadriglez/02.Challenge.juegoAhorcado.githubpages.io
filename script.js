var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

var moveToX = [503, 585, 585, 762, 762, 762, 762, 762, 762];
var lineToX = [797, 585, 762, 762, 762, 797, 727, 797, 727];
var moveToY = [365, 5, 5, 5, 117, 117, 117, 252, 252];
var lineToY = [365, 365, 5, 54, 252, 189, 189, 324, 324];
var intentos = 9;

let palabrasSecretas = ["COMPILAR", "JAVASCRIPT", "CODIGO", "PROGRAMA", "GITHUB", "ALURA", "ORACLE", "ONE", "AHORCADO", "ESTUDIO", "ASTROS", "MEDUSAS", "IRONMAN"];
let palabraSecreta = "";


function sorteoPalabra() {
    let palabraAleatoria = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)];
    palabraSecreta = palabraAleatoria;
    console.log(palabraSecreta);
}
sorteoPalabra();

function trazarFigura(x1, x2, y1, y2) {
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath();
    pincel.moveTo(x1, y1);
    pincel.lineTo(x2, y2);
    pincel.lineWidth = 10;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.stroke();
}

function trazarCabeza(){
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(762, 85.5, 31.5, 0, 2 * 3.14);
    pincel.stroke();
}

function dibujarGuion() {

    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    for (var i = 0; i < palabraSecreta.length; i++) {

        pincel.moveTo((350) + (80 * i), 430);
        pincel.lineTo((400) + (80 * i), 430);
    }

    pincel.stroke();
    pincel.closePath();
}

dibujarGuion();

trazarFigura(moveToX[0], lineToX[0], moveToY[0], lineToY[0]);

function dibujarTexto(texto) {
    pincel.beginPath();
    pincel.strokeStyle = "blue";
    pincel.font = "bold 40px arial";
    for (var i = 0; i < palabraSecreta.length; i++) {
        pincel.fillText(texto[i], (360) + (80 * i), 420)
    }

}
 var msg = '';
 
document.addEventListener('keydown',onKeyDown);

function onKeyDown(evt){
    var charCode = evt.key.toUpperCase();
    var codigo = event.which || event.keyCode;

    if(codigo >= 65 && codigo <= 90){
      msg = msg += charCode;
      dibujarLetrasIncorrecto(msg);
    }
}

var moverLetrasErroneas = 0;

function dibujarLetrasIncorrecto(texto) {
    pincel.beginPath();
    pincel.clearRect(300,450, 1000, 30);
    pincel.strokeStyle = "blue";
    pincel.font = "bold 40px arial";
    pincel.fillText(texto, 300 , 480);
    moverLetrasErroneas ++;
}

dibujarTexto(palabraSecreta);

switch(intentos){
    case 1:
        trazarFigura(moveToX[1], lineToX[1], moveToY[1], lineToY[1]);
        break;
    case 2:
        for(var i = 1;i < 3;i++){
            trazarFigura(moveToX[i], lineToX[i], moveToY[i], lineToY[i]);
        }
        break;
    case 3:
        for(var i = 1;i < 4;i++){
            trazarFigura(moveToX[i], lineToX[i], moveToY[i], lineToY[i]);
        }
        break;
    case 4:
        for(var i = 1;i < 4;i++){
            trazarFigura(moveToX[i], lineToX[i], moveToY[i], lineToY[i]);
        }
        trazarCabeza();
        break;
    case 5:
        for(var i = 1;i < 5;i++){
            trazarFigura(moveToX[i], lineToX[i], moveToY[i], lineToY[i]);
        }
        trazarCabeza();
        break;
    case 6:
        for(var i = 1;i < 6;i++){
            trazarFigura(moveToX[i], lineToX[i], moveToY[i], lineToY[i]);
        }
        trazarCabeza();
        break;
    case 7:
        for(var i = 1;i < 7;i++){
            trazarFigura(moveToX[i], lineToX[i], moveToY[i], lineToY[i]);
        }
        trazarCabeza();
        break;
    case 8:
        for(var i = 1;i < 8;i++){
            trazarFigura(moveToX[i], lineToX[i], moveToY[i], lineToY[i]);
        }
        trazarCabeza();
        break;
    case 9:
        for(var i = 1;i < 9;i++){
            trazarFigura(moveToX[i], lineToX[i], moveToY[i], lineToY[i]);
        }
        trazarCabeza();
        break;
}
