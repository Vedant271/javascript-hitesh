// === -> checks for value and type
// 5 === "5" -> false
// == -> only checks value
// 5 == "5" coercion conversion, "5" will be converted to 5 (number)

// JAVA
// == -> checks for value and memory for String
// isEquals -> checks only for value for String

// Nan confusion
let stringValue1 = "23";
console.log(Number(stringValue1));
console.log(typeof Number(stringValue1));
let stringValue2 = "24abc"; // dont put check on type (if it is a number or not because NaN is number type may problematic), 
                            // put check using NaN (if it is NaN or not, then perform needed number operation), 
                            // if conversion possible => "33" -> 33, null -> 0, true -> 1, false -> 0
                            // if conversion not possible => "23abc", "Hello World", undefined -> NaN 
console.log(Number(stringValue2)); // converted to NaN -> type of number
console.log(typeof Number(stringValue2));
console.log();


// Explicit Data Type Conversion JavaScript
// number to string
let someNumber = 123;
console.log(typeof someNumber);
let string1 = String(someNumber);
console.log(typeof string1);
let string2 = someNumber.toString();
console.log(typeof string2);
let string3 = someNumber + "";
console.log(typeof string3);
console.log("");

// string to number
let someString = "123";
console.log(typeof someString);
let num1 = Number(someString);
console.log(typeof num1);
let num2 = parseInt(someString);
console.log(typeof num2);
let someFloat = "12.34";
console.log(typeof someFloat);
let float1 = parseFloat(someFloat);
console.log(typeof float1);
console.log("");

// anything to boolean
let someValue1 = undefined; // undefined, null, NaN, "", 0, false        
let bool1 = Boolean(someValue1)                                           
console.log(bool1);                                                       
let someValue2 = "Hello World!"; // Anything other than -> undefined, null, NaN, "", 0, false
let bool2 = Boolean(someValue2);
console.log(bool2);
console.log("");

// other specialized conversions
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log(JSON.stringify({a:1})); // '{"a":1}'
console.log(JSON.parse('{"a":1}')); // {a: 1}
console.log(BigInt(123));           // 123n
console.log("");

// date conversion
console.log(Date.parse("2025-04-26")); // 1745616000000
console.log(new Date("2025-04-26"));    // Sat Apr 26 2025 ...
console.log(new Date(1745616000000));
console.log(new Date("2025-04-26").toString());
console.log(new Date("2025-04-26").toISOString());
console.log("");

// symbol
let sym = Symbol("id");
console.log(sym);
console.log(sym.toString()); // "Symbol(id)"
console.log("");


// Implicit Conversion
// string + number -> automatic conversion of number to string
console.log(5 + "5");
console.log("5" + 5);
console.log();

// boolean to number -> true = 1, false = 0
console.log(true+1); 
console.log(false+1);
console.log();


// Automatic Conversion in Logical Operations
// In JavaScript, these values are automatically converts 
// undefined, null, “” (empty string), false, NaN, and 0 to false, and all other values to true.
if("Hello World"){
    console.log("Hello World converted to true");
}
if(""){
    console.log("");
}else{
    console.log("Empty string converted to false");
}
console.log();

// string to number 
console.log(+"123");
console.log(typeof +"123");
console.log();

// equality comparison -> comparison happens once variables converted to same data type
console.log(5 == "5");
console.log();




// Tricky Conversions
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log();

console.log(3 + 4 * 5 % 3); // precedance -> mul, rem, add
// console.log(++true); // not possible
// console.log(true++); // not possible
console.log();

let someNum1, someNum2, someNum3;
someNum1 = someNum2 = someNum3 = 2 + 2;
console.table([someNum1, someNum2, someNum3]);

// cleaner way
let someNum4 = someNum5 = someNum6 = 2 + 2;
console.table([someNum4, someNum5, someNum6]);
// So what happens to num2 and num3?
// JavaScript creates num3 and num2 as global variables automatically — as var-type globals (attached to the window object in browsers).
// They are NOT block-scoped like let, they are function-scoped (classic old JavaScript behavior).

/*
Variable	Scope	        Type
num1	    block-scoped	let
num2	    global-scoped	behaves like var
num3	    global-scoped	behaves like var
*/

// cleaner and safer(someNum5 & someNum6 will be global scoped) way
let someNum7 = 2 + 2;
let someNum8 = someNum7;
let someNum9 = someNum7;
console.table([someNum7, someNum8, someNum9]);