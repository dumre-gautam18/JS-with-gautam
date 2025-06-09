// singleton object

//const tenderUser = new Object(); 


const tenderUser = {} // not singleton object

tenderUser.id = 123;
tenderUser.name = "abc12";
tenderUser.isLoggedIn= false;

console.log(tenderUser);

const regularUser = {
    name: "laxman ghimire",
    email: "laxtu12@gmail.com",
    fullname: {
        userFullname: {
            firstname: "laxman",
            lastname: "ghimire"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname);



const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {4: "e", 5: "f"}

// const obj4 = Object.assign(obj1, obj2, obj3);

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

