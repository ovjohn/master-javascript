'use stric'

//Prueba de let y var

alert('holaaaaaa');

//VARAIABLE GLOBAL VAR
var numero = 40;
console.log(numero);

if(true){
    var numero =50;
    console.log(numero);
}

//vARIABLE LOCAL LET
 if(true){
     let numero = 100;
     console.log(numero);
 }
console.log(numero);