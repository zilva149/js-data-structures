console.clear();

import { MyArray } from "./MyArray.js";
import { HashTable } from "./HashTable.js";
import { LinkedList } from "./LinkedList.js";
import { DoublyLinkedList } from "./DoublyLinkedList.js";
import { Queue } from "./Queue.js";
import { BinarySearchTree } from "./BinarySearchTree.js";

const arr = new MyArray();
const hashTable = new HashTable(100);
const linkedList = new LinkedList(0);
const doublyLinkedList = new DoublyLinkedList(0);
const myQueue = new Queue();
const tree = new BinarySearchTree();

tree.insert(7);
tree.insert(14);
tree.insert(16);
tree.insert(9);
tree.insert(2);
tree.insert(5);
console.log(tree.breadthFirstSearch());
console.log(tree);

function traverse(node) {
  const tree = { node: node.value };

  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}
