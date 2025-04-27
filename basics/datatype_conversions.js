// === -> checks for value and type
// 5 === "5" -> false
// == -> only checks value
// 5 == "5" coercion conversion, "5" will be converted to 5 (number)

// JAVA
// == -> checks for value and memory for String
// isEquals -> checks only for value for String

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

