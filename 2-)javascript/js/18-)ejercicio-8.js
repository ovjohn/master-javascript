'use stric'

/*
Calculadora
-) Que pida dos nuemros por pantalla
-) Sí metemos uno mal que lo vuelva a pedir
-) Que de el resultado de la operacion "Suma, resta, multiplicacion, divicion", por consola, alerta y pantalla */

do{
    var num1 = parseInt(prompt('Intruduce el primer numero:'));
    var num2 = parseInt(prompt('Introduce el segundo numero:'));
}while(isNaN(num1) || isNaN(num2));

var operacion = parseInt(prompt('Precione 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir¡¡'))
;


switch(operacion){
    case 1:
        resultado = num1 + num2;
        operacion = "suma";
    break;
    case 2:
        resultado = num1 - num2;
        operacion = "resta";
    break;
    case 3:
        resultado = num1 * num2;
        operacion = "multiplicacion";
    break;
    case 4:
        resultado = num1 / num2;
        operacion = "divicion";
    break;
}

document.write('La '+operacion+' es:'+resultado);
alert('La '+operacion+' es:'+resultado);
console.log('La '+operacion+' es:'+resultado);
