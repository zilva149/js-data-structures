export class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = {
      value: value,
      next: null,
    };

    this.tail = this.tail.next;

    this.length++;
  }

  prepend(value) {
    this.head = {
      value: value,
      next: this.head,
    };

    this.length++;
  }

  toString() {
    return JSON.stringify(this);
  }
}
