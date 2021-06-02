'use stric'

/*
Hacer un programa que muestre todos los numeros entre 
dos numeros introducidos por el usuario*/

var num_1 = parseInt(prompt('Indroduzca el primer numero: '));
var num_2 = parseInt(prompt('Introduzca el segundo numero: '));

document.write('<h1>El los numeros entre'+num_1+' a '+num_2+' son:</h1>')
for(num_1; num_1 < num_2-1; num_1++){
    document.write('El numero es: '+(num_1+1)+'<br>');

}