// array practice
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman" ];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);
 

// const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros);
// Spread syntax can be used when all elements from an object or array need to be included in a new array or object, 
// or should be applied one-by-one in a function call's arguments list. 

// const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);


console.log(Array.isArray("gautam"));
console.log(Array.from("gautam"));

console.log(Array.from({name: "gautam"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));









