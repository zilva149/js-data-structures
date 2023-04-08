import { timeStamp } from "console";

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

  unshift(item) {}

  shift() {}

  #shiftItemsLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  #shiftItemsRight(index) {}
}
