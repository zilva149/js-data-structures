export class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  start() {
    return this.data[0];
  }

  end() {
    return this.data[this.length - 1];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    this.#shiftItemsLeft(index);
    return item;
  }

  unshift(item) {
    this.#shiftItemsRight(0);
    this.data[0] = item;
  }

  shift() {
    const firstItem = this.data[0];
    delete this.data[0];
    this.#shiftItemsLeft(0);
    return firstItem;
  }

  #shiftItemsLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  #shiftItemsRight(index) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    delete this.data[index];
    this.length++;
  }
}
