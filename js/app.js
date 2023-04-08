console.clear();

import { MyArray } from "./MyArray.js";
import { HashTable } from "./HashTable.js";
import { LinkedList } from "./LinkedList.js";

const arr = new MyArray();
const hashTable = new HashTable(100);
const linkedList = new LinkedList(10);

linkedList.append(5);
linkedList.append(16);
linkedList.prepend(30);
console.log(linkedList);
console.log(linkedList.toString());
