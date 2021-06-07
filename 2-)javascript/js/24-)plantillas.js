'use stric'

//Plantillas de texto

var nombre = prompt("Tu monbre ?:");
var apelli = prompt('Tu apellidos ? : ');

//var texto = ' Tu mombre es '+nombre+' y tus apellido son '+apelli;

//PLanilla
var texto = `
<h1>Hola tu nombre </h1>
<h3>Tu monbre es: ${nombre}</h3>
<h3>Tu apellido es: ${apelli}</h3>
`;

document.write(texto);