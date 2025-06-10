// singleton object

//const tenderUser = new Object(); 


const tenderUser = {} // not singleton object

tenderUser.id = 123;
tenderUser.name = "abc12";
tenderUser.isLoggedIn= false;

// console.log(tenderUser);

// const regularUser = {
//     name: "laxman ghimire",
//     email: "laxtu12@gmail.com",
//     fullname: {
//         userFullname: {
//             firstname: "laxman",
//             lastname: "ghimire"
//         }
//     }
// }

// console.log(regularUser.fullname.userFullname.firstname);



// const obj1 = { 1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {4: "e", 5: "f"}

// // const obj4 = Object.assign(obj1, obj2, obj3);

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// console.log(tenderUser);

// const user = [{
//  id: 124,
//  email: "gautamdumre1718@gmail.com"
// },
// {id: 124,
//     email: "gautamdumre01111@gmail.com"
// },
// {id: 124,
//     email: "gautamdumre02@gmail.com"
// }]

// console.log(user);

// console.log(user[2].email);

// console.log(Object.keys(tenderUser));

// console.log(Object.values(tenderUser));
// console.log(tenderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in nepali",
    price: "999",
    courseInstructor: "gautam"
}

// console.log(course.courseInstructor);
// console.log(course["price"]);


// object destructuring in javascript
// const {courseInstructor} = course
// console.log(courseInstructor);

const {coursename: cn} = course
console.log(cn);

// JSON: Javascript Object NOtation
