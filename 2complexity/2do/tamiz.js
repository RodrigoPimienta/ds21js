/*
// 1. tamiz de Eratóstenes
// tamiz (n)
// -> n entero
// <- los n primeros elementos
*/

var n=prompt("Ingresa el numero de primos a mostrar");
var contador=0;
var fin=4

function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  

for (let x=0;x<=fin;x++) {
    fin++
    if (esPrimo(x)==false) {
        
    } else {
        contador++;
        console.log(contador+".- "+x);
        
    }

    if (contador==n) {
        break
    }
    
}

