'use strict'

//Bucle While

var year = 2051;

while(year >= 2021){
    console.log('Estamos en el año:'+year);

    year--;

    if(year == 2030){
        break;
    }

}

//Bulce Do While

var num = 30;
do{
    alert('El numero es:'+num);
    num--;
}while(num >=20);