'use stric'

/*
Programa que muestre todo los nuemros divisores de un
numero introducido en el prompt*/

var num = parseInt(prompt('Intruduce un nuemro'));

for(var i = 1; i <= num; i++){
    if(num%i == 0){
        console.log(i);

    }

}