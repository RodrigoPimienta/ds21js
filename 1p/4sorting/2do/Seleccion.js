// 2. seleccion
// ordenar (d)
// -> d una matriz de números aleatorios
// <- los números aleatorios ordenados

console.time("Temporizador");
var contador2=0

var numero=numeros(1,10000)
function numeros(min,max){
    var b=[9999]
    for(let i=0;i<10000;i++){
        b[i]=Math.floor(Math.random()* (max - min)) + min;
    }
    return b
}

var sort=Sorts(numero);
function Sorts(inputArr) { 
    console.log(inputArr);
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
                contador2++;
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    console.log(inputArr);
} 
console.timeEnd("Temporizador");
console.log("Pasos realizados: "+contador2);