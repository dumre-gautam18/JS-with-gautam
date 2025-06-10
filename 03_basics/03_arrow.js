
// this keyword is used for the reference of the context
const user = {
    username: "gautam",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);

        console.log(this);

    }

}
// user.welcomeMessage();
// user.username = "pawan";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     const uname = "gautam";
//     console.log(this.uname);
// }
// chai();

// const chai = function(){
//     let username = "gautam"
//     console.log(this.chai)
// }

// chai();

// console.log(typeof(chai));

// const chai = () =>{
//     let username = "gautam";
//     console.log(this.username);
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5,4));


// implicit return
// euta matra xa vane yasari garne

const addTwo = (num1, num2) =>  (num1 + num2);
console.log(addTwo(5,5));

const result = () => ({name: "gautam dumre", age: 22})

console.log(result());
