'use stric'

//ESTRUCTURA DE CONTROL SWITCH

var edad = 70;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Ya eres mayor de edad¡¡";
    break;
    case 40:
        imprime = "Ya estas super bien en tu 40 años¡¡";
    break;
    case 70:
        imprime = "Eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}

console.log(imprime);