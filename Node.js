class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;

        }
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this. head;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        
        }
        this.length++;
    }
    pop() {
        if(!this.head) return null;
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null;
        }
        this.length--;
    }
}
var list = new DoublyLinkedList();
list.push("Frankie");
list.push("Hussein");
list.push("Cerina");
list.pop();
list.traverse();
