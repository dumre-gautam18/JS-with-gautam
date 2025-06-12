const coding = ["js", "py", "java", "c++", "c"]

const values = coding.forEach( (item) => {
    console.log(item);

    return item;
})

console.log(values);

// forEach le cahi return gardina in this case...


// fileter is used because it return values
// filter le condition true vaye matra return garxa hai


const myNums = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4 )

console.log(newNums);