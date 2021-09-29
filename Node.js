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
    shift() {
        if(!this.head) return null;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
        var oldHead = this.head;
        this.head = oldHead.next;
        this.head.previous = null;
        oldHead.next = null;
        }
        this.length--;
    }
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
        
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return list;
    }
    get(idx) {
        if(idx < 0 || idx >= this.length ) return null;
        if(idx <= this.length / 2) {
            var counter = 0;
            var current = this.head;
            while(counter !== idx) {
                current = current.next;
                counter++;
            }
        }
        if(idx > this.length / 2) {
            var counter = this.length -1;
            var current = this.tail;
            while(counter !== idx) {
                current = current.previous;
                current--;
            }
        }
        return current;
    }
    set(idx, val) {
        var foundNode = this.get(idx); 
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if(idx < 0 || idx > this.length) return null;
        if(idx === 0) return this.unshift(val);
        if(idx === this.length) return this.push(val);
        var newNode = new Node(val);
        var beforeNode = this.get(idx - 1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.previous = beforeNode;
        newNode.next = afterNode;
        afterNode.previous = newNode;
        this.length++;
        return true;
    }
}
var list = new DoublyLinkedList();
list.push("Frankie");
list.push("Hussein");
list.push("Cerina");
list.push("Andrea");
list.unshift("Brenda");
// list.traverse();
// console.log("Retrived Index: " + list.get(0));
list.set(1,"Brianna");
list.insert(0, "Jessica");
list.insert(6, "Patty");
list.insert(3, "Dalia");
list.insert(1, "Maria");
list.traverse();
