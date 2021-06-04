'use stric'

//Funcion:
//Es una agrupacion reutilizable de un conjunto de instrucciones

function porConsola(num1=0,num2=0){
    console.log("La suma es: "+(num1+num2));
    console.log("La resta es: "+(num1-num2));
    console.log("La multiplicacion es: "+(num1*num2));
    console.log("La divicion es: "+(num1/num2));

}

function porPantalla(num1=0,num2=0){
    document.write('La suma es: '+(num1+num2)+'<br/>');
    document.write('La resta es: '+(num1-num2)+'<br/>');
    document.write('La multiplicacion es: '+(num1*num2)+'<br/>');
    document.write('La divicion es: '+(num1/num2)+'<br/>');

}

function calculadora2(num1, num2, mostrar = false){
    if(mostrar == false){
        porConsola(num1,num2);
            
    }else{
       porPantalla(num1,num2); 
    }
}

calculadora2(8,2,true);

