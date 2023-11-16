//falsy values
// false , 0 , -0 , BigInt 0n, "" , null , NaN , undefined


//truthy values
// true, "0" , 'false' , " " , [] , {} , function(){}

const arr = []

//to check in array conditions if the array is empty or not
if( arr.length === 0 ){
    console.log("array is empty")
}
//=== is used to check the type as well as the value


const obj = {}

if(Object.keys(obj).length === 0) console.log("obj is empty")

// Nullish Coalescing operator (??) : null undefined

let val1;
val1 = null ?? 10;

//so here it checks if the first value assigned is not null if null then it goes to the next option that is mostly a complex function etc not 10 like here
//mostly used to handle null and undefines errors



//Terniary Operator

// condition ? true : false;



