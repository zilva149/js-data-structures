console.clear();

import { MyArray } from "./MyArray.js";
import { HashTable } from "./HashTable.js";

const arr = new MyArray();
const hashTable = new HashTable(50);

console.log(arr);
hashTable.set("apple", "red");
hashTable.set("dog", "medutis");
hashTable.set("food", ["pork chops", "eggs"]);
console.log(hashTable.get("food"));
console.log(hashTable.data);
