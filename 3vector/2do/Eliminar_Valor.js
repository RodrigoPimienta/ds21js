/*
elimina el valor en la posición p
*/

let array = [0,1,2,3,4,5,6,7,8,9];

console.log(array);

var a=prompt("Ingresa la posición de cuyo valor quieras eliminar de este array");

array.splice(a,1);

console.log(array)