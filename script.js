var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

var moveToX = [503,585,585,762,762,762,762,762,762];
var lineToX = [797,585,762,762,762,797,727,797,727];
var moveToY = [365,5,5,5,117,117,117,252,252];
var lineToY = [365,365,5,54,252,189,189,324,324];

let palabrasSecretas = ["COMPILADOR","JAVASCRIPT","CODIGO","PROGRAMACION","GITHUB"];
let palabraSecreta = "hftgyu56";

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
        
        pincel.moveTo((450)+(80*i),480);
        pincel.lineTo((500)+(80*i),480);
    }

    pincel.stroke();
    pincel.closePath();
} 

dibujarGuion();


trazarFigura(moveToX[0],lineToX[0],moveToY[0],lineToY[0])

for(var i = 1;i<= 8; i ++){
    trazarFigura(moveToX[i],lineToX[i],moveToY[i],lineToY[i])
}


pincel.strokeStyle= "#0A3871";
pincel.beginPath(); //Cabeza
pincel.arc(762,85.5,31.5,0,2*3.14);
pincel.stroke();

texto = "Hola mundo";

function dibujarTexto(texto,textoX,textoY){
pincel.beginPath();
pincel.strokeStyle= "blue";
pincel.font = "bold 40px arial";
pincel.fillText(texto,textoX,textoY);
}

dibujarTexto(texto,600,450)

