// 1. ordenamiento de burbuja
// ordenar (d)
// -> d una matriz de números aleatorios
// <- los números aleatorios ordenados

console.time("Temporizador");
var contadorB=0

var numero=numeros(1,10000)

function numeros(min,max){
    var b=[9999]
    for(let i=0;i<10000;i++){
        b[i]=Math.floor(Math.random()* (max - min)) + min;
    }
    return b
}

var burbuja=Burbujas(numero)
function Burbujas(lista) {
    
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
                contadorB++;
            }
        }
    }

    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}


console.timeEnd("Temporizador");
console.log("Pasos realizados: "+contadorB);