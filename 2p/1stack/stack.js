function Stack() {
    this.dataStore = [];
    
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    }
//Para ingresar elemetos a la pila
    function push(element) {
    this.dataStore[this.top++] = element;
    }

//Regresa el elemento mas reciente de la pila
    function peek() {
    return this.dataStore[this.top-1];
    }
//Regresa el elemento mas reciente de la pila y lo elimina de la misma
    function pop() {
    return this.dataStore[--this.top];
    }
//Limpia la pila
    function clear() {
    this.top = 0;
    }
//Regresa el tamaño de la pila
    function length() {
    return this.top;
    }

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());

var popped = s.pop();
console.log("The popped element is: " + popped);
console.log("length: " + s.length());
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());