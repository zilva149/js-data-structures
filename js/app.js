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
const binarySearchTree = new BinarySearchTree();

console.log(binarySearchTree);
