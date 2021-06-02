'use stric'
/*
Que nos diga sí un nuemro es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

var numero = parseInt(prompt('Introduce un numero'));

while(isNaN(numero) || numero <= 0 ){
    numero = parseInt(prompt('Introduce un numero'));
}

if(numero%2 == 0){
    console.log('El numero: '+numero+', es par¡¡¡');

}else{
    console.log('El numero; '+numero+', es impar¡¡');

}