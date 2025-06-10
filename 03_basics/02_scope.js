function one(){
    const username = "gautam dumre"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    //console.log(website);
    
    two()

}

one()

console.log(addOne(3));

function addOne(num){
   return num + 1; 
}

//console.log(addOne(3));


//console.log(addTwo(5));

const addTwo = function(num){
    return num + 2;

}

console.log(addTwo(5));