console.clear();

import { MyArray } from "./MyArray.js";
import { HashTable } from "./HashTable.js";

const arr = new MyArray();
const hashTable = new HashTable(50);

console.log(arr);
hashTable.set("apple", "red");
console.log(hashTable);
