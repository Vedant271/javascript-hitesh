console.log();
console.log('============================================================ >');
console.log();

// Write your code here
const mySym = Symbol("key1");

const myObj = {
    name:"Vedant",
    age:23,
    mySym:"keyValue",
    [mySym]:"Symbol-Key-Value",
    "full name":"Vedant Karale"
}
console.log(myObj);
console.log(typeof myObj.mySym);
console.log(typeof myObj[mySym]);
console.log(typeof mySym);
console.log(typeof myObj["age"]);
console.log(typeof myObj["age"]);
console.log(typeof myObj["full name"]);
// console.log(typeof myObj.full name); // not possible

myObj.age = 18;
console.log(myObj);
Object.freeze(myObj);
myObj.age = 20;
console.log(myObj);

myObj.myFun = function(){
    console.log("New Function");
}
// myObj.myFun();
// console.log(myObj.myFun());


console.log();
console.log('< ============================================================');