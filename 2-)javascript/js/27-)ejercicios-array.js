'use stric'

/*Hacer u programa que:
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (Todos sus elementos) en el cuerpo de ña pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introduxido por el usuario, que nos diga si lo encuentra y su indice
(Se valorá el uso de Funciones)
*/

var arr = [];
num = 0;

//Funcion para introducir un valor en el arreglo
function introducirNumero(valor){
    arr.push(valor);
}

//Funcion para pedir nuemros por pantalla
function pedirNumeros(){
    do{
        let valor = parseInt(prompt('Introduzca un numero: '));
        introducirNumero(valor);
        num++; 
    }while(num < 6);
 }

 //Funcion recorrer un array
 function recorrerArray(argumento){
    for(let indice in argumento){
        document.write('<li>El indice del Array es: '+indice+' y el contenido es: '+argumento[indice]+ '</li>');
    }
 }

 //Funcion para mostrar el arrglo en el body
function mostrar(argumento){
    document.write('<h1>Visualisacion del Array Entero</h1>');
    document.write('<ul>');
        recorrerArray(argumento);
    document.write('</ul>');
    console.log(arr);
       
}

//Funcion para ordenar Ascendente
function ordenarAscedente(argumento){
    document.write('<h2>Ordenado Ascendente:{'+argumento.sort()+'}</h2>');
    console.log(argumento.sort(function(a,b){return a-b}));
}

//Funcion ordenar Descendente un arreglo
function ordenarDescendente(argumento){
    document.write('<h2>Ordenado Descendente:{'+argumento.reverse()+'}</h2>');
    console.log(argumento.reverse());    
}

//FUNCION DE SOLICITUD DE ORDEN
function solicitudOrdenar(argumento){
    var ordenar = prompt('Marque un "1" para ordenar el Arreglo Ascendete o "2" para ordenar Decendente, "n" para Ninguna');
    if(ordenar == 1){
        ordenarAscedente(argumento);
    }else if(ordenar == 2){
        ordenarDescendente(argumento);
    }else{
        document.write('GRACIAS POR USARME');
    }
    console.log(ordenar);   
}

function encontrarValor(argumento){
    en = prompt('Introduzca el Numero que quieres buscar:');
    encontrado = argumento.findIndex( numero => {return numero == en});
    if(encontrado && encontrado != -1){
        document.write('<h3> El numero:'+en+' ha sido localizado en la posicion:'+encontrado+'</h3>');
    }else{
        document.write('<h1>El Numero no se encuentra en el arreglo</h1>');
    }
}
 

pedirNumeros();

mostrar(arr);
//ordenarAscedente(arr);
//ordenarDescendente(arr);
solicitudOrdenar(arr);
encontrarValor(arr);







