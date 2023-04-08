console.clear();

import { MyArray } from "./MyArray.js";

const arr = new MyArray();
arr.push("a");
arr.push("b");
arr.push("x");
arr.push("g");
arr.push("l");
arr.delete(2);
console.log(arr);
