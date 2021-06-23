'use stric'

//BOM - Browser Object Model

console.log(window.innerHeight); //Para encomtar el alto de la pantalla
console.log(window.innerWidth); //Para encontar el ancho de la pantalla
console.log(screen.height);
console.log(screen.width);
console.log(window.location.href); //Para encontrar la direccion URL de la web

function redireccion(url){ //Funcion que le envia o cambia el URL de la web
    window.location.href = url;
}

function abrirVentana(url){ //Funcion para abrir ventana nueva
    var url = prompt("Cual es la direccion nueva?:");
    window.open(url,"","width=500 height=500");
}