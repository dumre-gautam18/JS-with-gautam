// functions in javascript

// function addTwoNumber(num1, num2){
//    // console.log(num1+num2);
//     //let result = num1 + num2;
//     return num1 + num2;

// }

// const result = addTwoNumber(4,5);
// console.log("Result: ", result);


// function userStatus(uName){

//     //console.log(uName, "login successfully");
//     return `user ${uName} login successfully`;

// }

// console.log(userStatus("gautam"));

// spread operator ...
function calculateCartPrice(...prices){
       return prices;
}

console.log(calculateCartPrice(200, 300, 500, 150));

const user = {
    username: "gautam",
    prices: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)

// we can directly pass object 

handleObject({
    username: "gautam",
    prices: 200
})

const myNewArray = [200, 500, 600];

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 600, 800]));





