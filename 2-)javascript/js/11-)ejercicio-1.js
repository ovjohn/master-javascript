'use stric'

/* EJERCICIO 1
Programa que pide dos numeros y que indique cual es el mayor,
el menor y sí son iguales
Plus: Pedir los numeros si son menores que Cero o que sean letras*/

var num1 = parseInt(prompt('Cual es el numero 1:'));
var num2 = parseInt(prompt('Cual es el segundo numero'));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt('Cual es el numero 1:'));
    num2 = parseInt(prompt('Cual es el segundo numero'));
}


if(num1 == num2){
    console.log('Los numeros son iguales');
}else{
    console.log('No son iguales');
    if(num1 > num2){
        console.log('El numero UNO:'+ num1 +', es el mayor');
    }else{
        console.log('El numero Dos ='+ num2 +', es el mayor');
    }
}