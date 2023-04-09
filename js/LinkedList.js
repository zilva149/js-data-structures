import { Node } from "./children/Node.js";

export class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index > this.length) {
      throw new Error(`Index: '${index}' does not exist`);
    }

    if (index === this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    let parentNode = this.#traverseLinkedList(index - 1);
    let pointerNode = parentNode.next;

    newNode.next = pointerNode;
    parentNode.next = newNode;
    this.length++;

    return this;
  }

  delete(index) {
    if (index > this.length - 1) {
      throw new Error(`Index: '${index}' does not exist`);
    }

    const parentNode = this.#traverseLinkedList(index - 1);
    const unwantedNode = parentNode.next;

    parentNode.next = unwantedNode.next;
    this.length--;
    return this;
  }

  get(index) {
    if (index > this.length - 1) {
      return undefined;
    }

    const node = this.#traverseLinkedList(index);
    return node.value;
  }

  #traverseLinkedList(index) {
    let currentNode = this.head;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
  }

  reverse() {
    let prevNode = null;
    let currNode = this.head;
    let nextNode = null;
    this.tail = this.head;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.head = prevNode;

    return this;
  }

  toString() {
    return JSON.stringify(this);
  }

  toArray() {
    let values = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }
}
