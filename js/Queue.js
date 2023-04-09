import { Node } from "./children/Node.js";

export class Queue {
  constructor() {
    this.top = new Node(null);
    this.bottom = this.top;
    this.length = 0;
  }
}
