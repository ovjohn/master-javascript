'use stric'
//Condicionales
/*Ejemplo 1
var edad_1 = 30;
var edad_2 = 12;

if(edad_1 > edad_2){
    console.log('Edad Uno es mayor que Edad Dos')

}else{
    console.log('Edad 2 es mayor que edad 1')
}*/

//Segundo Ejemplo
/*
var user = "Juan Perez";
var edad = 70;
if(edad >= 18){
    console.log(user+' tiene:'+edad+' y es mayor de edad.')

    if(edad <= 34){
        console.log('Aun eres millenial')
    }else if(edad >= 70){
        console.log('Eres anciano')
    }else{
        console.log('Ya no eres millenial')
    }
}else{
console.log(user+' tiene:'+edad+' y es menor de edad.')}*/

//OPERADORES LOGICOS
/*
AND = $$
OR = ||
NEGACION = !
*/


//oRERADOR DE NEGACION
var year = 2027;
if(year != 2016){
    console.log('No es año 2016, es el año:'+year)
}

//AND
if(year >2000 && year <= 2016){
    console.log('Estamos en la era actual');
}else{
    console.log('Estamos en la epoca post-actual');
}

//OR
if(year == 2007 || (year >= 2017 && year == 2027)){
    console.log('El año nermina en 7')
}else{
    console.log('Año no esta registrado');
}