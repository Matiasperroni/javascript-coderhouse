

/* 
Quiero crear un simulador de apuestas, que me pida un monto de dinero a apostar y tenga distintos
tipos diferentes de apuestas (de la A a la H) y me devuelva una posible ganancia.
Ademas tiene un contador de apuestas que afecta al multiplicador, dependiendo de cuantas apuestas se hagan
el multiplicador va a ser mayor y mayor sera la posible ganancia.
*/

//creo distintas constantes con valores que pagarian cada apuesta
const apuestaA = 2;
const apuestaB = 3;
const apuestaC = 4;
const apuestaD = 5;
const apuestaE = 6;
const apuestaF = 7;
const apuestaG = 8;
const apuestaH = 9;

//el usuario debe decidir su apuesta escribiendo de las letras A a H


// cuando el usuario elija su apuesta las iguala al valor de las constantes de cada tipo de apuesta
let suApuesta = prompt("Las posibles apuestas son: A, B, C, D, E, F, G, H. Elija a quien quiere apostar.");
suApuesta = suApuesta.toUpperCase();


// creo una funcion que dependiendo de la letra que ingrese el usuario lo iguale al valor de la apuesta
const cambioLetra = () => {
    switch (suApuesta) {
        case "A":
            suApuesta = apuestaA;
            break;
        case "B":
            suApuesta = apuestaB;
            break;
        case "C":
            suApuesta = apuestaC;
            break;
        case "D":
            suApuesta = apuestaD;
            break;
            
        case "E":
            suApuesta = apuestaE;
            break;
        case "F":
            suApuesta = apuestaF;
            break;
        case "G":
            suApuesta = apuestaG;
            break;
        case "H":
            suApuesta = apuestaH;
            break;
        default:
            console.log(suApuesta + " no es una apuesta valida");
            break;
        };
    };
cambioLetra();

//se le pide al usuario le cantidad de dinero a apostar y guardo el valor de lo apostado en una apuesta parcial
//creo una variable para apuestaParcial para luego utilizarala fuera de la funcion y poder sumar ese valor al de la apuesta final
let apuestaParcial = 0;
//creo una variable para mensaje que uso mas adelante
let mensaje = "";

const ingresarValorDeApuesta = () => {
    montoAApostar = prompt("ingrese el monto a apostar en dolares");
    montoAApostar = Number(montoAApostar);
    apuestaParcial = montoAApostar * suApuesta;
    
    //si el valor ingresado no es numerico, vuelve a pedir un valor a ingresar
    
    if(isNaN(montoAApostar)) {
        while (isNaN(montoAApostar)){        
            montoAApostar = prompt("debe ingresar un valor numerico");
            montoAApostar = Number(montoAApostar);
            apuestaParcial = montoAApostar * suApuesta;
            console.log("Las posibles ganancias de su apuesta hasta aca son de: ", apuestaParcial, "dolares");
            mensaje = prompt("si desea hacer otra apuesta escriba SI");
            mensaje = mensaje.toUpperCase();
            console.log(mensaje);
            }
        } else {
        console.log("Las posibles ganancias de su apuesta hasta aca son de: ", apuestaParcial, "dolares");
        console.log(mensaje);
    };
};
ingresarValorDeApuesta();


//agrego un multiplcador que sube de acuerdo a cuantas apuestas juntas se hacen
let multiplicador = 0;
//inicializo una variable que va a contar la cantidad de apuestas que se llevan hechas
let cantidadApuestas= 1;


//declaro una funcion que le va a asignar el valor a apuestaIngresada para sumarlo al valor parcial
const nuevaApuesta = () => {
    apuestaIngresada = prompt("ingrese el valor numerico de su nueva apuesta");
    apuestaIngresada = Number(apuestaIngresada);
    suApuesta = prompt("a que le quiere apostar, elija su apuesta de la A a la H");
    suApuesta = suApuesta.toLocaleUpperCase();
    cambioLetra();
    apuestaIngresada = apuestaIngresada * suApuesta;
    apuestaParcial = apuestaParcial + apuestaIngresada;
    //hago que la cantidad de apuestas suba cada vez que se corra esta funcion para que afecte el multiplicador
    cantidadApuestas = cantidadApuestas + 1;
    return apuestaParcial;
};
//creo una funcion para que cada vez que termine de hacer una apuesta me pregunte si quiero seguir apostando
//en caso de que quiera, me pregunte una nueva apuesta y ese valor lo sume al valor parcial, y si no me devuelva el valor total


const seguirApostando = () => {
    mensaje = prompt("si desea hacer otra apuesta escriba SI");
    mensaje = mensaje.toUpperCase();
    
    while(mensaje === "SI") {
        nuevaApuesta();
        console.log("Sus posibles ganancias son: ", apuestaParcial);
        mensaje = prompt("si desea hacer otra apuesta escriba SI");
        mensaje = mensaje.toUpperCase();
    }
};
seguirApostando();

//agrego un loop que haga que cada vez que se haga una apuesta la variable cantidad de apuestas suba y modifique el multiplicador
for(let i=1; i<10;i++) {
    if( cantidadApuestas<3 ) {
        multiplicador = 1.1;
    } else if( cantidadApuestas>=3 && cantidadApuestas<7 ){
    multiplicador = 1.3;
    } else {
        multiplicador = 1.5;
    }
};


console.log("Su multiplicador es: ", multiplicador);
console.log("Esta es la cantidad de apuestas que lleva hechas: ", cantidadApuestas);
//guardo en la variable apuestaTotal el valor total de la apuesta calculandolo con el multiplicador
let apuestaTotal = apuestaParcial * multiplicador;

console.log("Sus posibles ganancias totales son ", apuestaTotal, ", suerte con su apuesta!");