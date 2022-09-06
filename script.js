var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.strokeStyle= "#0A3871";// suelo y madera vertical
pincel.beginPath();
pincel.moveTo(3,365);
pincel.lineTo(297,365);
pincel.moveTo(85,5);
pincel.lineTo(85,365);
pincel.lineWidth = 5;
pincel.stroke();

pincel.beginPath(); //madera horizontal
pincel.moveTo(85,5);
pincel.lineTo(262,5);
pincel.stroke();

pincel.beginPath(); //Cuerda
pincel.moveTo(262, 5);
pincel.lineTo(262, 54);
pincel.stroke();

pincel.beginPath(); //Cabeza
pincel.arc(262,85.5,31.5,0,2*3.14);
pincel.stroke();

pincel.beginPath(); // Cuerpo
pincel.moveTo(262, 117);
pincel.lineTo(262, 252);
pincel.stroke();

pincel.beginPath(); //Mano izquierda
pincel.moveTo(262, 117);
pincel.lineTo(297, 189);
pincel.stroke();

pincel.beginPath(); //Mano Derecha
pincel.moveTo(262, 117);
pincel.lineTo(227, 189);
pincel.stroke();

pincel.beginPath(); //Pie izquierdo
pincel.moveTo(262, 252);
pincel.lineTo(297, 324);
pincel.stroke();

pincel.beginPath(); //Pie derecho
pincel.moveTo(262, 252);
pincel.lineTo(227, 324);
pincel.stroke();

function mostrarImput(){
    document.write("<input/>");
}

mostrarImput();