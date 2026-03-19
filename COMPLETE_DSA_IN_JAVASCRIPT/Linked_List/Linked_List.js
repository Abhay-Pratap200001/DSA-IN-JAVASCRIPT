/*
1. What is a Linked List
Ans: A data structure consisting of node where each node contains:
. Data: The value of the element.
. Pointer/Refremce: Points to the next node in the sequence.


2. Linked List - key operation
Ans: Insertion: We can add the data into linked list
. At the begginig
. At the end
. At a specific Position

DELETION: we can delete the data from the linked list
. By value
. By Postion

TRAVERSAL: Visting all nodes sequentially, one by one from start to end
. Start to end

SEARCH: Find if a node with a specific value
LENGTH: Number of node in a linked list 
*/


/*
3. Linked List -Implementation
. No in-build support of Linked list in j.s
. We will create our own Linked list class
. We will support following operations:
Insert at the End
Traverse
Delete by value
Search
Length 
*/


/*
3. Linked List - Advantages
. Memory Efficient for saving big amount of data
. No contiguouse Memory Requirement
. Dynamic Size
. Allocate more space when needed
. Efficient insertion and deletion
. As compared to array, No need to shift all elements
*/


/*
4. Real world examples
. FaceBook can use linked list to 
  Store posts
  Chat coversation
  Friend Suggestion

. Ecommerce
  Product Suggestion

. Big data set and you want to be efficient with memory
*/


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }


  traverse() {
    if (this.head === null) {
      return "LinkedList is null";
    }

    let current = this.head;
    console.log(current.data);
    while (current.next !== null) {
      current = current.next;
      console.log(current.data);
    }
  }


  deleteByValue(dataToDelete) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    if (current.data === dataToDelete) {
      this.head = current.next;
      return;
    }

    let previous = null;
    while (current.next !== null) {
      previous = current;
      current = current.next;
      if (current.data === dataToDelete) {
        previous.next = current.next;
        return;
      }
    }
  }


  search(dataToSearch) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;
    if (current.data === dataToSearch) {
      return true;
    }

    while (current.next !== null) {
      current = current.next;
      if (current.data === dataToSearch) {
        return true;
      }
    }
    return false;
  }

  
  length() {
    if (this.head === null) {
      return 0;
    }

    let counter = 1;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
      counter++;
    }
    return counter;
  }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(20);
linkedList.insertAtEnd(11);
linkedList.traverse();
console.log("delting the value 2");
// linkedList.deleteByValue(11);
linkedList.insertAtEnd(30);
linkedList.insertAtEnd(40);
linkedList.insertAtEnd(50);

linkedList.traverse();

console.log("searching 20 result is", linkedList.search(20));
console.log("searching 20 result is", linkedList.search(200));

console.log("length of linklist result is", linkedList.length());
