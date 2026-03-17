/*
1. What is a queue
. Queue in genral is a waiting line
. In hindi we call it kattar(aap katar mae hain)
. Queue data structure can store many elements
. Queue follows first in first out principle (FIFO)
. This is similar to real world queue
*/

/*
2. Queue - Key operations
. Enqueue: Add an element to the end of the queue
. Dequeue: Remove an element from the front of the queue
. Peek: Get the element at the front of the queue without removing it
. isEmpty: Checking if the queue is empty
. Size: Get the number of elements in the queue
*/

/*
3. Queue - Implementation
. No in-build support of queue in j.s
. We will create our own queue class
. We will support all operations
. It will be based upon array
. Arrays allow all opertaions on data including reading from front and back of array
. Our queue class will not allow all operations
*/

//<<------------------------------------------------------------------------------------------->>//

//Create class for queue

export class Queue {
  #items = [];
  enqueu(items) {
    this.#items.push(items);
  }

  dequeue() {
    if (this.#items.length === 0) {
      throw new Error("No items in the queue");
    }
    return this.#items.shift();
  }

  peek() {
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }
}
