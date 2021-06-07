'use stric'

function holaMundo(texto){
    var dentro = 'Soy un string dentro de la funcion';
    console.log(texto);
    console.log(dentro);
}

var texto = 'Hola mundo soy una variable global';

holaMundo(texto);
//console.log(dentro); -> No se puede llamar a una llamada local de la funcion en un ambito global, Error¡¡¡¡¡¡¿