
//Función para optimizar la asignación de texto
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos =[]; //donde se alacenarán los numeros secretos generados
let numeroMaximo = 10;
//FUNCIONES
function AsignarTextoElemento (elemento, texto){ //en este caso aisgnamos 2 parametros, elemento que se va a cambiar y el texto que se va a poner
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//función que conecta el boton html y que verifica el intento, asi mismo activa el boton nuevo juego
function verificarIntento (){
    //let numeroDeUsuario = document.querySelector("input"); //linea 24 html "imput", representa caja de texto de entrada
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //llamar elemento por ID
    console.log(numeroDeUsuario);
    if (numeroDeUsuario === numeroSecreto){
        AsignarTextoElemento("p",`¡Acertaste el numero en ${intentos} ${intentos == 1 ? "intento" : "intentos" }!`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    }
    else{
        
        if (numeroDeUsuario > numeroSecreto){
            AsignarTextoElemento("p","El número secreto es menor");
        }
        else{
            AsignarTextoElemento("p","el numero es mayor");
        }
        intentos ++;
        limpiarInput ();
    }
    return;
}
//función para limpiar la caja de input
function limpiarInput(){
    //seleccionamos mediante el query selector pero esta vez por ID
    document.querySelector("#valorUsuario").value = '';
    return;
}
//funcion para general el numero aleatorio
function generarNumero(){
    //no se necesita crear una variable
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros de la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSecretos);
    if (listaNumerosSecretos.length == numeroMaximo){
        AsignarTextoElemento ('p','ya se sortearon todos los numeros posibles');
    }
    else{
        //si el numero esta en lista se genera otro, si no se agrega al array
        if(listaNumerosSecretos.includes(numeroGenerado)){
            return generarNumero();
        }
        else{
            listaNumerosSecretos.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
//funcion reiniciar JUEGO
function reiniciarJuego(){
    //limpiar la caja
    limpiarInput();
    //poner el mensaje inicial es decir del 1 al 10
    //general un numero numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales ();
    //dehabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute ('disabled', 'true');
    return;
}
function condicionesIniciales (){
    AsignarTextoElemento('h1','juego numero secreto');
    AsignarTextoElemento('p', `Elige un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumero ();
    intentos = 1;
    return;
}


condicionesIniciales ();