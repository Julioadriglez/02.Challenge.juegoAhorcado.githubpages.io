var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.strokeStyle= "#0A3871";// suelo y madera vertical
pincel.beginPath();
pincel.moveTo(3,365);
pincel.lineTo(297,365);
pincel.moveTo(85,5);
pincel.lineTo(85,365);
pincel.lineWidth = 10;
pincel.stroke();

pincel.strokeStyle= "#0A3871";
pincel.beginPath(); //madera horizontal
pincel.moveTo(80,5);
pincel.lineTo(267,5);
pincel.stroke();

pincel.strokeStyle= "#0A3871";
pincel.beginPath(); //Cuerda
pincel.moveTo(262, 5);
pincel.lineTo(262, 54);
pincel.stroke();

pincel.strokeStyle= "#0A3871";
pincel.beginPath(); //Cabeza
pincel.arc(262,85.5,31.5,0,2*3.14);
pincel.stroke();

pincel.strokeStyle= "#0A3871";
pincel.beginPath(); // Cuerpo
pincel.moveTo(262, 117);
pincel.lineTo(262, 252);
pincel.stroke();

pincel.strokeStyle= "#0A3871";
pincel.beginPath(); //Mano izquierda
pincel.moveTo(262, 117);
pincel.lineTo(297, 189);
pincel.stroke();

pincel.strokeStyle= "#0A3871";
pincel.beginPath(); //Mano Derecha
pincel.moveTo(262, 117);
pincel.lineTo(227, 189);
pincel.stroke();

pincel.strokeStyle= "#0A3871";
pincel.beginPath(); //Pie izquierdo
pincel.moveTo(262, 252);
pincel.lineTo(297, 324);
pincel.stroke();

pincel.strokeStyle= "#0A3871";
pincel.beginPath(); //Pie derecho
pincel.moveTo(262, 252);
pincel.lineTo(227, 324);
pincel.stroke();

var numeroPalabras = ["cero","uno","dos","tres","cuatro"]

function mostrarInput(n){
    var input = document.createElement("input");
    input.setAttribute('type','text');
    input.style.width =  "50px";
    input.style.height = "50px"
    input.style.fontSize = "40px";
    input.className = n;
    var parent = document.getElementById("parentDiv");
    parent.appendChild(input);
    
}

mostrarInput(numeroPalabras[0]);
mostrarInput(numeroPalabras[1]);
mostrarInput(numeroPalabras[2]);
mostrarInput(numeroPalabras[3]);
mostrarInput(numeroPalabras[4]);
