// 2. Mapa
// a. producir 1e5 nombres aleatorios, es decir, name35927
// B. agregue cada nombre aleatorio en un mapa
// C. medir el tiempo que tomó
// D. calcular el promedio de 7 carreras

let mapa = new Map();
var a=[99999]
var contador=1;
var promedio=0;
while(contador<8){
    var inicio = Date.now();
for(let i=0;i<100000;i++){
    a[i]="Name"+Math.floor(Math.random()* (100000 - 1)) + 1;

}

for(var j = 0; j < a.length; j++) {
    mapa.set((j+1), 'name'+a[j]);
}

    var fin = Date.now();
    var transcurso = fin - inicio;

    console.log("Corrida "+contador+" / Tiempo: "+transcurso+"ms")
    promedio=promedio+transcurso;
    contador++;
}

promedio=promedio/7;
promedio=promedio.toFixed(4);
console.log("El promedio de 7 corridas fue de: "+promedio+"ms");