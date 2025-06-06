const name = "gautam"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// new way to create string
const gameName = new String('gautam-dc-com');
/*
console.log(gameName[0]);
console.log(gameName.toUpperCase());

console.log(gameName.__proto__);
console.log(gameName.charAt(4));

console.log(gameName.indexOf('t'));
*/

const newString= gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-2, 4);
console.log(anotherString);


const newStringOne = "  gautam dumre  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const greeting = "  hello world  ";

console.log(greeting);
//  Expected output: "  hello world  "
console.log(greeting.trim());
// Expected output: "hello world"



const url = "https://gautamdumre%20bcis.com";
console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));



