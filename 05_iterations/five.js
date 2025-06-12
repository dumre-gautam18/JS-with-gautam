// forEach loop practice
const coding = ["js", "python", "java", "ruby", "c++"];

// coding.forEach( function (item){
//     console.log(item);
// });


coding.forEach( (item) => {
    //console.log(item);
})




// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, array) =>{
//     console.log(item, index, array)
// })


const myCoding = [{
    codingLanguage: "javascrit",
    codingFileName: "js"
},
{
    codingLanguage: "python",
    codingFileName: "py"
},
{
    codingLanguage: "java",
    codingFileName: "java"
},
{
    codingLanguage: "ruby",
    codingFileName: "rb"
}
]

myCoding.forEach((item) =>{
    console.log(item.codingFileName);
})