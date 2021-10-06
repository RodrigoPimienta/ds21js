/*
// 2. número aleatorio
// aleatorio (n)
// -> n entero
// <- un número aleatorio en [1-n]
*/

var n =prompt("Ingresa un numero")

var numero=numeros(1,n)

function numeros(min,max){

    b=Math.floor(Math.random()* (max - min)) + min;
    return b
}
console.log(numero);