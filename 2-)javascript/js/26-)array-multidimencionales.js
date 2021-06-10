'use stric'

//Array Multidimencionales
//Son array dentro de otros Arrays

var categorias =['Accion','Terror','Comedia']; //Primer array
var peliculas = ['Movie-1','Movie-2','Movie-3','Movie-4']; //Segundo array

console.log(categorias);
console.log(categorias.sort()); //Metodo sort para ORDENAR arreglos¡¡
console.log(categorias.reverse()); //Metodo para Ordenar Inversamente un array//

var cine = [categorias, peliculas]; //ARRAY MULTIDMENCIONAL "Tiene dos array"
/*
console.log(cine[0][2]);
console.log(cine[1][3]);
*/

//Operaciones con Array
//peliculas.push("Batman"); //añadir en elemento
//peliculas.pop(); //para eliminar el ultimo elemento

/*
//Intruducir un elemento en el array
do{
    peliculaNew = prompt('Introduzca una pelicula nueva: ');
    peliculas.push(peliculaNew);
}while(peliculaNew != 'FIN');
peliculas.pop();

console.log(peliculas);
*/

//Eliminar un elemento en concreto
/*
var indice = peliculas.indexOf('Movie-3');
console.log(indice);
peliculas.splice(indice,1);
console.log(peliculas);

//Convertir Un ARRAY to string
peliculas_string = peliculas.join();
console.log(peliculas_string);
*/
//Convertir string a arrays
cadena = "UNO, Dos, tres";
array = cadena.split(", ");
console.log(array);
