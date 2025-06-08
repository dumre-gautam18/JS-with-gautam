// dates in javascript

let today = new Date();
console.log(today);

console.log(today.toLocaleString());
console.log(today.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() +1 );

console.log(newDate.getDay());

console.log(`today date is ${newDate.toString()}`);


