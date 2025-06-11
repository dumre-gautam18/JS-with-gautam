// falsely values: false, "", 0, -0, NaN, undefined, null
// truthy values: true, [], {} and others values


const myObject = {}

if(Object.keys(myObject).length == 0){
    console.log("empty object");
}

const myIntro = {
    name: "gautam dumre",
    age: 22,
    location: "butwal",
    education: "bachelor"

}

if((Object.keys(myIntro).length )>= 2){
    //console.log(Object.keys(myIntro).length);
    console.log("mybrief introduction");
}else{
    console.log("Introduction has more than 2 properties");
}

// Nullish coalesing operator (??): null, undefined
// null coalesing operator is used when the data is come from database and we don't want null value.
let val1;

//val1 = 5 ?? 10

//val1 = null ?? 10

val1 = undefined ?? 10
console.log(val1);


// Terniary Operator

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");