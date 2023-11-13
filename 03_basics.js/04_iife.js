//global scope ke pollution se bachane ke liye use krte hei IIFE 
//and also it immediately invokes the function we have
(function chai(){
    console.log("sparsh");
})();

((name) => {console.log(`db connected by ${name}`)})('sparshjiii');

