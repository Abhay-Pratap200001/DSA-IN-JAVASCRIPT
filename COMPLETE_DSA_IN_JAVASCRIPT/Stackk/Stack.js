/*
1. What is stack
. Stack is a data structure that can store many elements
. Stack follow LIFO - Last in first out
. Last item added to the stack is the first one to be removed
*/

/*
2. Stack key operations
. Push: Adds an elements to the top of the stack
. Pop: Remove and return the top element of the stack
. Peek: Return the top elements without removing it --> peek mens itonly see the element not remove it 
. isEmpty: Check if the stack is empty
. Size: Return the number of the elements in the stack
*/

/*
3. Stack Implementation
. No in-build support of stack in j.s
. We will create our own stack class
. We will support all operations
. It will be based upon array
. Arrays allow all opertaions on data including reading from front and back of array
. Our Stack class will not allow all operations
*/

//How we create stack using classes

export class Stack {
  #items = []  //#items will make this class values privete  so any other developer can access values directly using items[0] they have to use all methods to access valued this is called incampsulation
  constructor() {}

  push(element) {
    this.#items.push(element);
  }

  pop() {
    if (this.#items.length === 0) {
      throw new Error("No items for pop");
    }
    return this.#items.pop();
  }

  peek(element) {
    if (this.#items.length === 0) {
      return null;
    }
    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }
}




