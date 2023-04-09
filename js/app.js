console.clear();

import { MyArray } from "./MyArray.js";
import { HashTable } from "./HashTable.js";
import { LinkedList } from "./LinkedList.js";
import { DoublyLinkedList } from "./DoublyLinkedList.js";

const arr = new MyArray();
const hashTable = new HashTable(100);
const linkedList = new LinkedList(0);
const doublyLinkedList = new DoublyLinkedList(10);

linkedList.append(7);
linkedList.append(14);
linkedList.append(21);
linkedList.append(28);
linkedList.append(35);
console.log(linkedList);
console.log(linkedList.toArray());
console.log(linkedList.reverse());
