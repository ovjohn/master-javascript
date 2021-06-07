'use stric'

var numero = 4;
var texto1 = '  Bienvenido al curso de javascript';
var texto2 = 'Es muy buen curso  ';
/*
var dato = numero.toString(); //Transformamos el numero a un string
    dato  = texto1.toUpperCase(); // Para convertir a MAyusculas
    dato2 = texto2.toLowerCase(); //Para convertir a minusculas un texto

//console.log(typeof dato);// tyoerof sirve para ver el tipo de dato
console.log (dato);
console.log(dato2);

//CALCULAR LONGITUD 
var nombre = '';
console.log(nombre.length);

//CONCATENAR O UNIR TEXTOS
 var textoTotal = texto1+' '+texto2; //Primera forma de hacerlo
 var textototal2 = texto2.concat(" ¡¡¡¡¡",texto2);
 console.log(textoTotal);
 console.log(textototal2);
*/

//Clase del video de BUSQUEDAS

var busqueda = texto1.indexOf('java'); //Para busqcar en que posicion se encuentra o comienza java
console.log(busqueda);
var busqueda2 = texto2.search('muy'); //Hace lo mismo que indexOF
console.log(busqueda2);
var busqueda3 = texto1.match('curso'); //Busqca el elemento y lo devuelve como un array
console.log(busqueda3);
var buqueda4 = texto1.substr(14,5);
console.log(buqueda4); //Extrae 5 elementos a partir de la posicion 14
var busqueda5 = texto1.charAt(20); //Selecciona una letra en concreto la numero 20
console.log(busqueda5);
var busqueda6 = texto1.includes('curso'); //Busca en un texto y devuelve true o false
console.log(busqueda6);

var reemplazo = texto1.replace('curso','taller'); //Reemplaza la palabra por otra
console.log(reemplazo);
var separar = texto1.split(" "); //sepera el texto por palabras y lo agrega a un array
console.log(separar);

var eleiminarEspacio = texto1.trim();
var eliminar2 = texto2.trim();
console.log(eleiminarEspacio, eliminar2);