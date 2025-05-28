console.log();
console.log('============================================================ >');
console.log();

// Write your code here
const myArray1 = [1,2,3,4, "Shaktiman"];
const myArray2 = new Array(1,2,3,4,5);
console.log(myArray1);
console.log(myArray1[4]);
console.log(myArray2);

// Array Methods
console.log(myArray1.join());
myArray1.push(7);
console.log(myArray1);
myArray1.pop(7);
console.log(myArray1);

console.log(myArray1.includes("shaktiman")); // false - case sensitive
console.log(myArray1.includes("Shaktiman")); // true
console.log(myArray1.indexOf("shaktiman")); // -1 - because not present
console.log(myArray1.indexOf("Shaktiman")); // 4

myArray1.unshift("Nagraj"); // adds element at index 0
console.log(myArray1);
myArray1.shift(); // removes element at index 0
console.log(myArray1);


// Slice, Splice
console.log(`Initial Array - ${myArray2}`);
console.log((myArray2.slice(1,3))); // do not manipulates original array, do not include last range
console.log(`Array after slice - ${myArray2}`);
console.log(myArray2.splice(1,3)); // manipulates original array (removes range from original array), includes last range
console.log(`Array after splice - ${myArray2}`);


console.log();
console.log('< ============================================================');