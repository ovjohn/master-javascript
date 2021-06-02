'use stric'

//Mostrar todo los numeros impares que hay entre dos nuemros introducidos por el usuario

var num1 = parseInt(prompt('Introduce el primer numero:'));
var num2 = parseInt(prompt('Indruduce el segundo numero: '));

document.write('<h1>Numeros impares que existe entre '+num1+' y '+num2+':</h1>');
for(i = num1; i <= num2; i++){
    
    if((i%2) == 1){
        document.write('Numero: '+i+'<br>');

    }

}