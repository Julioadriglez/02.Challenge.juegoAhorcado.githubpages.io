var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

var moveToX = [503,585,585,762,762,762,762,762,762];
var lineToX = [797,585,762,762,762,797,727,797,727];
var moveToY = [365,5,5,5,117,117,117,252,252];
var lineToY = [365,365,5,54,252,189,189,324,324];

let palabrasSecretas = ["COMPILAR","JAVASCRIPT","CODIGO","PROGRAMA","GITHUB","ALURA","ORACLE","ONE","AHORCADO","ESTUDIO","ASTROS","MEDUSAS","IRONMAN"];
let palabraSecreta = "";

function sorteoPalabra(){
    let palabraAleatoria = palabrasSecretas[Math.floor(Math.random()*palabrasSecretas.length)];
    palabraSecreta = palabraAleatoria;
    console.log(palabraSecreta);
}
sorteoPalabra();

function trazarFigura(x1,x2,y1,y2){
    pincel.strokeStyle= "#0A3871"
    pincel.beginPath();
    pincel.moveTo(x1,y1);
    pincel.lineTo(x2,y2);
    pincel.lineWidth = 10;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.stroke();
}

function dibujarGuion(){
    
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle= "#0A3871";
    for(var i = 0;i < palabraSecreta.length;i++){
        
        pincel.moveTo((350)+(80*i),480);
        pincel.lineTo((400)+(80*i),480);
    }

    pincel.stroke();
    pincel.closePath();
} 

dibujarGuion();



trazarFigura(moveToX[0],lineToX[0],moveToY[0],lineToY[0]);
// cuerpo
for(var i = 1;i<= 8; i ++){
    trazarFigura(moveToX[i],lineToX[i],moveToY[i],lineToY[i]);
}

 //Cabeza
pincel.strokeStyle= "#0A3871";
pincel.beginPath();
pincel.arc(762,85.5,31.5,0,2*3.14);
pincel.stroke();



function dibujarTexto(texto){
pincel.beginPath();
pincel.strokeStyle= "blue";
pincel.font = "bold 40px arial";
for(var i = 0;i < palabraSecreta.length;i++){
        pincel.fillText(texto[i],(365)+(80*i),470);
}

}

dibujarTexto(palabraSecreta);

