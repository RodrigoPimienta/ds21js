function Node(data) {  //Funcion nodos
    this.data = data;
    this.left = null;
    this.right = null;
}

var array = [];
array[0]=new Node('+')
for (let i = 1; i <= 6; i++) { //Creación y asginación de valor al nodo

    array[i]= new Node(i)
}

array[0].left = array[6];
array[0].right = array[5];
array[5].left = array[4];
array[5].right = array[3];  //Asignación de hijos
array[6].left = array[2];
array[6].right = array[1];

function inorder(n){
    if (n!==null){
        inorder(n.left);
        console.log(n.data);
        inorder(n.right);
    }
}

console.log("Inorder");  //Llamar a la funcion inorder
inorder(array[0]);


