// for (let index = 1; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// multiplication table of 1 to 10.

for(let i = 1; i <= 10; i++){
    //console.log(`Multiplication of ${i}`);
    
    for (let j = 1; j <= 10; j++){
     // console.log(`${i} * ${j} =  ${i*j}`);
     
    }
}

const myHeros = ["thor", "flash", "spiderman", "shaktiman"];

for (let index = 0; index < myHeros.length; index++) {
    const element = myHeros[index];
    console.log(element);
    
}

// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if( index == 5){
//         console.log("Detected 5");
//         break;
//     }
    
//     console.log(element);

    
// }

for (let index = 1; index <= 20; index++) {
    const element = index;
    if( index == 5){
        console.log("Detected 5");
        continue
    }
    
    console.log(element);

    
}

