'use stric'

//Funcion anonimas
//Es una funcion que no tiene nombre Ejemplo:
/*
var movie = function(name){
    return 'The name is: '+name;
}
*/

function sumame(num1,num2, sumameYmuestra, muestramePordos){ //Funcion callback, llamando a las anonimas¡¡¡
    sumar = num1+num2;
    
    sumameYmuestra(sumar);
    muestramePordos(sumar);

   //console.log(sumar);
    return sumar;
}

//Llamando a la Funcion
sumame(2,4, dato => {                                 //Primera funcion ananonima "Aqui es de flecha"
    console.log('La suma de los datos es: '+dato);
}, function(dato){                                          //Segunda Funcion anonima
    console.log('El resultado de la suma por dos es: '+(dato*2));
});

//Una funcion de callback es una funcion anonima dentro de otra funcion¡¡¡ Ejemplo en el ejercicio anterior






