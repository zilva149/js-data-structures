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

  push(item) {}

  pop() {}

  delete(index) {}

  unshift(item) {}

  shift() {}

  shiftItemsLeft(index) {}

  shiftItemsRight(index) {}
}
