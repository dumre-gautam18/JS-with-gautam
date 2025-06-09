// objects singleton
const sym = Symbol("key1");
//object literals



const jsUser = {
    name: "gautam",
    "full name": "gautam dumre",
    [sym]: "mykey",
    age: 22,
    email: "gautamdumre1718@gmail.com",
    location: "butwal",
    isLoogedIn: false,
    lastLoginDay: ["sunday", "friday"]
}



jsUser.email = "gautamdumre0111@gmail.com";
console.log(jsUser);

console.log(typeof(sym));


