import { TreeNode } from "./children/TreeNode.js";

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // Go Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Go Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        // Go Left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // Go Right
        currentNode = currentNode.right;
      } else {
        // If value === currentNode.value
        return currentNode;
      }
    }

    return false;
  }

  remove(value) {}
}
