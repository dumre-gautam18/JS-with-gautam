// for-of loop practice 

const arr = [1, 2, 3, 4, 5, 6, 7 ,8];

for (const num of arr) {
    //console.log(`Value of numbers is ${num}`);
}


const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(`Value is ${greet}`);
}


// map in javascript

const map = new Map();

map.set("NP", "Nepal");
map.set("IND", "India");
map.set("USA", "United States of America");
map.set("AUS", "Austrila");

console.log(map);


for (const [key, value] of map) {
    console.log(`The country ${value} code is ${key}`);
}