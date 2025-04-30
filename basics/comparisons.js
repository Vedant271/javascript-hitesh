// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// when comparison possible no data type conversions, when comparison not possible there will be data type conversion
// comparisons and equality operators work differently in js, when == null not converted to 0, when >= null converted to 0
console.log("2" > 1);
console.log("02" > 1);
console.log("2"==2);
console.log();

// == -> loose equality operator

console.log(null > 0); // null during relational comparisons converted to 0
console.log(null == 0); // null during loose equality operator -> null is only loosely equal to undefined
console.log(null >= 0);
console.log();

console.log(undefined > 0); // coerced to NaN, any comparison with NaN is false 
console.log(undefined == 0); // null during loose equality operator -> undefined is only loosely equal to null
console.log(undefined >= 0);
console.log();

console.log(undefined==null);
console.log();

// === -> strict check, value and data type both checked
console.log("2" === 2);
console.log();
