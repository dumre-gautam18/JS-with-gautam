// Immediately Invoked Function Expressions (IIFE)
// duita IIFE ko lagi ko lagi semicolon rakhnu parxa

(function chai (){
    // named IIFE
    console.log(`db connected`);
})();

((name) => {
    console.log(`db connected successully ${name}`);
})("gautam")