import { DoublyNode } from "./children/DoublyNode.js";

export class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DoublyNode(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new DoublyNode(value);

    this.head.prev = newNode;
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

    const newNode = new DoublyNode(value);

    const pointerNode = this.#traverseLinkedList(index);
    const parentNode = pointerNode.prev;

    newNode.next = pointerNode;
    pointerNode.prev = newNode;
    parentNode.next = newNode;
    newNode.prev = parentNode;
    this.length++;

    return this;
  }

  delete(index) {
    if (index > this.length - 1) {
      throw new Error(`Index: '${index}' does not exist`);
    }

    const unwantedNode = this.#traverseLinkedList(index);
    const parentNode = unwantedNode.prev;
    const pointerNode = unwantedNode.next;

    if (!parentNode) {
      pointerNode.prev = null;
      this.head = pointerNode;
    } else {
      parentNode.next = pointerNode;
      pointerNode.prev = parentNode;
    }

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
