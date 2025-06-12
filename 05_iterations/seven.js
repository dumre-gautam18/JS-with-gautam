// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

//console.log(myTotal)


const cart = [{
    courseName: "javascript",
    price: 2999
},
{
    courseName: "python",
    price: 1999
},
{
    courseName: "java",
    price: 2000
}]

const sum = cart.reduce( (acc, item) => acc + item.price, 0)

console.log(sum);