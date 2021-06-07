'use stric'

//Los Parametros rest, se define con  3 puntos antes del parametro y sirve para 
//pasar un numero indefinidos de parametros a la funcion. Ejemplo:

function fruits(fruit_1, fruit_2, ...resto_de_frutas){
    console.log('First Fruit is: '+fruit_1);
    console.log('Second Fruit is: '+fruit_2);
    console.log(resto_de_frutas);
}

//fruits('melon', 'piña', 'naranja', 'cambur');

//La parametros Spread, sirven para pasar un array a una funcion y que este lo separe como valor, Ejemplo:
var frutas = ['manzana', 'durazno'];//Definicion del array

fruits(...frutas,'melon','piña'); // el array se pasa con tres punto con el fin de separarlo como datos