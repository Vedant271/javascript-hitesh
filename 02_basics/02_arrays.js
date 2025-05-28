console.log();
console.log('============================================================ >');
console.log();

// Write your code here
const marvel = ["Iron Man Bhau", "Thor Patil", "Capthaan Amrica"];
const dc = ["Batman", "Superman", "Flash"];

console.log(marvel);
console.log(dc);

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);


const all_heroes = marvel.concat(dc);
console.log(all_heroes);

const new_all_heroes = [...marvel, ...dc];
console.log(new_all_heroes);

const another_array = [1,2,3,[4,5,6],7,8,[9,1,[2,3]]];
const another_array_flatten = another_array.flat(Infinity); // 0,1,2,Infinity - depths to be flatten | default (without argument to flat) - 1
console.log(another_array_flatten);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"})); // have to mention what to add for ex. keys, values from objects, 
                                          // if it did not able to convert argument into array it will return empty array

const var_1 = 100;
const var_2 = 200;
const var_3 = 300;

console.log(Array.of(var_1, var_2, var_3));


console.log();
console.log('< ============================================================');