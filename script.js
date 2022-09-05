var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.strokeStyle= "#0A3871";// suelo y madera vertical
pincel.beginPath();
pincel.moveTo(280, 40);
pincel.lineTo(280, 400);
pincel.moveTo(200, 400);
pincel.lineTo(560, 400);
pincel.lineWidth = 5;
pincel.stroke();

pincel.beginPath(); //madera horizontal
pincel.moveTo(280, 40);
pincel.lineTo(453, 40);
pincel.stroke();

pincel.beginPath(); //Cuerda
pincel.moveTo(453, 40);
pincel.lineTo(453, 89);
pincel.stroke();

pincel.beginPath(); //Cabeza
pincel.arc(453,120.5,31.5,0,2*3.14);
pincel.stroke();

pincel.beginPath(); // Cuerpo
pincel.moveTo(453, 152);
pincel.lineTo(453, 287);
pincel.stroke();

pincel.beginPath(); //Mano izquierda
pincel.moveTo(453, 152);
pincel.lineTo(422, 214);
pincel.stroke();

pincel.beginPath(); //Mano Derecha
pincel.moveTo(453, 152);
pincel.lineTo(484, 214);
pincel.stroke();

pincel.beginPath(); //Pie izquierdo
pincel.moveTo(453, 287);
pincel.lineTo(422, 349);
pincel.stroke();

pincel.beginPath(); //Pie derecho
pincel.moveTo(453, 287);
pincel.lineTo(484, 349);
pincel.stroke();