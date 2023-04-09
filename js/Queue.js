import { Node } from "./children/Node.js";

export class Queue {
  constructor() {
    this.first = new Node(null);
    this.last = this.first;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue() {
    if (this.length === 1) {
      this.last = null;
    }

    if (this.length === 0) {
      return null;
    }

    this.first = this.first.next;
    this.length--;
    return this;
  }

  lookup(index) {
    if (index === 0) {
      return this.first.value;
    }

    if (index === this.length - 1) {
      return this.last.value;
    }

    if (index < 0 || index > this.length - 1) {
      throw new Error(`Index: ${index}, does not exist`);
    }

    let currentNode = this.first;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }
  }
}
