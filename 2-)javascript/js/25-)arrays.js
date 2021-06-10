'use stric'

//Arrays, arreglos o matrices

var nombre = ['Juan','Luis','Pedro','Eloy','Goyo']; // creacion de un array de la forma normal

var lenguajes = new Array('PHP','Python','Java','Go','JS');

//console.log(nombre);
//console.log(lenguajes.length); //para ver la dimencion de un array

/*

//Visualizar un elemento del array
var elemento = parseInt(prompt('Cual es el nuemro del elemento que quieres ver: '));
if(elemento >= nombre.length){
    alert('Por favor introduzca un numero menor a 5¡¡');
}else{
    alert('El elemnto es: '+nombre[elemento]);
}
*/

/*
//Ver el contenido de un array completo
document.write('<h1>Contenido de un Array</h1>');
document.write('<ul>');
    for(var i = 0; i < nombre.length; i++){
        document.write('<li>El nombre es:'+nombre[i]+'</li>');

    }
document.write('</ul>');
*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Recorrer el array con forEach
document.write('<h1>Contenido de un Array</h1>');
document.write('<ul>');
    nombre.forEach((elemento, indice, arreglo) =>{
        document.write('<li>El nombre es: '+indice+' - '+elemento+'</li>');
    })    
document.write('</ul>');
*/

//Otra forma de Recorer un array
for(let lenguaje in lenguajes){
    document.write('El array es: '+lenguajes[lenguaje]+'<br/>');

}

//Como BUSCAR EN UN ARRAY
var precios = [2,35,52,10,3,50];

var busqueda = lenguajes.find((lenguaje)=>{ return lenguaje == 'PHP';});    //Deveuelve el valor del array
var busqueda1 = lenguajes.findIndex( lenguaje => lenguaje == 'PHP'); // Devuelve el Indice del array "No es necesario poner el return"
var busqueda2 = precios.some( precio => precio > 52);

console.log(busqueda, busqueda1, busqueda2);


