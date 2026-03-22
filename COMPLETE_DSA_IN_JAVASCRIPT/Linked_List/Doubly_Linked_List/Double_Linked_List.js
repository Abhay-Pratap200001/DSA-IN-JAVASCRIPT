/*
1. Doubly Linked List Node Parts
. DATA: The actual value stored in the node.
. Next Pointer: A pointer to the next node in the sequence
. Preveious Pointer: A pointer to the previous node in the sequence
*/

/*
2. Doubly Linked List -Implementaion
. Insert 
    At the end - Append
    At the beginning - Prepend

. Tarverse
    From the start
    From the end

. Delete by value
. Search 
. Length
*/

class Node {
  constructor(data) {
    this.previous = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentLastNode = this.tail;
      currentLastNode.next = newNode;
      newNode.previous = currentLastNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if ((this.tail = null)) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentStartNode = this.head;
      newNode.next = currentStartNode;
      currentStartNode.previous = newNode;
      this.head = newNode;
    }
  }

  traverse() {
    if (this.head === null) {
      return;
    }
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== null);
  }

  traverseEnd() {
    if (this.tail === null) {
      return;
    }
    let current = this.tail;
    do {
      console.log(current.data);
      current = current.previous;
    } while (current !== null);
  }

  delete(dataToDelete) {
    if (this.head === null) {
      return;
    }
    let current = this.head;
    while (current !== null) {
        if (current.data = dataToDelete) {
             if (current === this.head) {
                this.head = current.next
                this.head.previous = null
             }

             if (current === this.tail) {
                this.tail = current.previous
                this.tail.next = null
             }
        }
      current = current.next;
    }
  }
}

const doubly = new DoublyLinkedList();
doubly.append(20);
doubly.traverse();
console.log("adding 11");
doubly.prepend(11);
doubly.traverse();
console.log("traversing from end");
doubly.traverseEnd();
