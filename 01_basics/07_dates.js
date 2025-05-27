console.log()
console.log('============================================================');
console.log()


console.log("Hello World!");

const myDate = new Date();
console.log(myDate);
console.log(`myDate.toString() - ${myDate.toString()}`);
console.log(`myDate.toLocaleString() - ${myDate.toLocaleString()}`);
console.log(myDate.getDate());
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.getTime());


let newCreatedDate = new Date("10-14-2024");
console.log(newCreatedDate.toLocaleString());

let anotherOne = Date.now();
console.log(anotherOne);
console.log(Math.floor(anotherOne/1000));

console.log(anotherOne-newCreatedDate);


console.log();
console.log('============================================================');