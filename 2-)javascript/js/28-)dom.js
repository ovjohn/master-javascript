'use stric'

//DOM Document Object Model


//Formas de seleccionar un ID en concreto

//var caja = document.getElementById("micaja"); //Para seleccionar el ID "micaja"
var caja = document.querySelector("#micaja"); //Para selecionar por el selector

var contenido = caja.textContent;  //Para sacar el contenido del elemento¡¡
console.log(contenido);

function colorFondo(color){
    caja.style.background = color;
}


caja.innerHTML = "¡Texto desde JS"; // Para cambiar el texto html
caja.style.background = "red"; //Cambiar el color de fondo
caja.style.padding = "50px";
caja.style.color = "white";
caja.className ="hola"; // para añadir una clase



//Conseguir elementos por su etiqueta

var todoslasEtiquetas = document.getElementsByTagName('div');  //Optener todo los elementos con etiqueta DIV
todoslasEtiquetas[2].innerHTML = "Otro tecto con innerHTML";
todoslasEtiquetas[2].style.background = 'blue';


var seccion = document.querySelector('#miseccion');
for(var valor in todoslasEtiquetas){

    if(typeof todoslasEtiquetas[valor].textContent == 'string'){
        var parrafo = document.createElement('h1'); // Creacion el elemento parrajo
        var texto = document.createTextNode(todoslasEtiquetas[valor].textContent); // craacion del texto 
        parrafo.append(texto); //Añadiendo el texto a la etiqueta <p>
        parrafo.style.color = "blue";
        seccion.append(parrafo); // Anadiendo el parrafo a la seccion de mi html
    }    
}


//conseguir elementos por su clase

var divsRojos = document.getElementsByClassName('rojo'); //Seleccionando los divs con clase rojo
var divsAmarillo = document.getElementsByClassName('amarillo'); // Seleccionando los elementos con clase amarillo
divsAmarillo[0].style.background = "yellow";

for(var i in divsRojos){
    if(divsRojos[i].className == "rojo"){
        divsRojos[i].style.background = "red"; 
    }
    
}


console.log(divsRojos);


console.log(todoslasEtiquetas);
console.log(caja);



