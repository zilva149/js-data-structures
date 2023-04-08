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
linkedList.prepend(14);
linkedList.insert(2, 7);
linkedList.insert(5, 9);
linkedList.delete(2);
linkedList.delete(1);
console.log(linkedList);
console.log(linkedList.get(4));
console.log(linkedList.toArray());
