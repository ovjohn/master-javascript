/*
Tabla de multiplicar del numero que se introduzca*/

var num = parseInt(prompt('Indroduce el numero que quiere la tabla de multiplicar: '));
var tabla = 0;

while(tabla <= 10){
    let producto = tabla * num;
    document.write('<h3>'+tabla+ ' x '+num+' = '+producto+'</h3>');
    tabla++
}

document.write('Tabla de multiplicar de todo los numeros');

for(var a1 = 0; a1 <=10; a1++){
    document.write('<h2>Tabla del '+a1+'</h2>');
    for(var a2 = 1; a2 <= 10; a2++){
        document.write('<h3>'+a1+ ' x '+a2+' = '+(a1*a2)+'</h3>');
        if(a2 == 10){
            document.write('<br>');
        }

    }

}