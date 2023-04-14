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

  remove(value) {
    // TODO: implement remove method
  }

  BFS() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  DFSInOrder() {
    return this.traverseInOrder(this.root, []);
  }

  DFSPreOrder() {
    return this.traversePreOrder(this.root, []);
  }

  DFSPostOrder() {
    return this.traversePostOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }

    list.push(node.value);

    if (node.right) {
      this.traverseInOrder(node.right, list);
    }

    return list;
  }

  traversePreOrder(node, list) {
    list.push(node.value);

    if (node.left) {
      this.traversePreOrder(node.left, list);
    }

    if (node.right) {
      this.traversePreOrder(node.right, list);
    }

    return list;
  }

  traversePostOrder(node, list) {
    if (node.left) {
      this.traversePostOrder(node.left, list);
    }

    if (node.right) {
      this.traversePostOrder(node.right, list);
    }

    list.push(node.value);

    return list;
  }
}
