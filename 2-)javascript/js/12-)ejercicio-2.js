'use stric'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y ahí mnostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduzca un numero: '));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);

}while(numero >= 0)

alert('La suma de todo los numeros es:'+suma);
alert('La media de los numero es: '+(suma/contador));
