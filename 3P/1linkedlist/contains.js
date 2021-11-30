function Node(data) { 
    this.data = data
    this.next = null
 }


function Linked(n) {
    this.head = n
    this.tail = n
    this.size = 1

    this.getHead = getHead
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.contains = contains
}

function getHead(){return this.head}

function prepend(n){
    n.next = this.head
    this.head=n
    this.size++
}

function append(n){
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){
	//	    console.log(c.key)
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

function contains(v) {
    let lista=this.head               
    let exist=false

    while(lista){
        if (lista.data==v ) { //Ver si existe el elemento
            exist=true;
        }
        lista=lista.next //Recorrido dentro de la lista
    }
    console.log(exist)
}
var i=prompt("Ingresa un caracter para buscar en la lista: ");

let n1=new Node('a')
let n2=new Node('b')
let n3=new Node('c')
let n4=new Node('d')
let l=new Linked(n1)

l.append(n2)
l.append(n3)
l.append(n4)
console.log("Lista:")
l.traverse(l.getHead())

console.log("El resultado de la busqueda del caracter: '"+i+"´ fue:");
l.contains(i)