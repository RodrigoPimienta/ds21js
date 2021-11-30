function Node(data) { //Estrucutra de la lista
    this.data = data;
    this.next = next;
  }  
function Stack() { //Estrucutra de la pila
    this.push = push;
    this.head = null;
  }
function push() { //Funcion para ingresar los elementos
    const nuevoobjeto = new Node(c, this.head)
    this.head = newItem;}

var cont= 1,tiempo=0, contador2=0;
while(cont<8){
    var inicio = new Date();  //Incio Temporizador
    var contador=0,b;
    var s = new Stack();
    var numero=numeros(1,10000)
    function numeros(min,max){
        for(let i=0;i<10000;i++){          
            s.push=Math.floor(Math.random()* (max - min)) + min;       
            contador++; } }
    var fin = new Date() - inicio;
    tiempo = tiempo + fin; //Termina el temporizador
    console.log("A la corrida "+cont+" le tomo "+fin+"ms y "+contador+" pasos")
    cont++; contador2=contador2+contador;
}
console.log("El tiempo promedio es: "+(tiempo/7)+" ms"); //Promedio
console.log("Los pasos promedios fueron: "+(contador2/7)+" ms"); //Promedio