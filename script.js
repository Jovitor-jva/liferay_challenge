const btInserir = document.getElementById("btInserir");
const concluirA = document.getElementById("concluirA");
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  export default class Queue {
    constructor() {
      this.front = null;
      this.back = null;
    }
    isEmpty() {
      return !this.front;
    }
  
    enqueue(value) {
      console.log('ENQUEUE', value);
      let node = new Node(value);
      if (this.isEmpty()) {
        this.front = this.back = node;
      }
      else {
        this.back.next = node;
        this.back = node;
      }
      this.print();
    }  
    print() {
      if (this.isEmpty()) {
        console.log('EMPTY QUEUE');
      }
      else {
        let tmpArr = [];
        let tmp = this.front;
        while (tmp) {
          tmpArr.push(tmp.value);
          tmp = tmp.next;
        }
        console.log(tmpArr.join(','));
      }
    }
    dequeue() {
      let node = this.front;
      console.log('DEQUEUE', node ? node.value : '');
      if (!this.isEmpty()) {
        this.front = this.front.next;
      }
      if (!this.front) {
        this.back = null;
      }

      this.print();
      return node;
    }
  }
  btInserir.onclick = enqueue;
  concluirA.onclick = dequeue;



/*const btInserir = document.getElementById("btInserir");
const concluirA = document.getElementById("concluirA");
const Queue = () => {
    const data = []
}
const adicionar = (value) =>{
    data.unshift(value)
    document.write(value)
}
const remove = () => {
    if (data.length == 0){
        return -1;
    }
    const value = data[data.length -1]
    data.splice(data.length-1, 1)
    return value;
    
}


const print = () => console.log(data)

btInserir.onclick = adicionar;
concluirA.onclick = remove;
return{
    adicionar,
    remove,
    print,
}*/









/*function Queue() {
    this.queue = {};
    this.tail = 0;
    this.head = 0;
  }
  
  // Add an element to the end of the queue.
  Queue.prototype.enqueue = function(element) {
    this.queue[this.tail++] = element;
  }
  
  // Delete the first element of the queue.
  Queue.prototype.dequeue = function() {
    if (this.tail === this.head)
        return undefined
  
    var element = this.queue[this.head];
    delete this.elements[this.head++];
    return element;
  }*/