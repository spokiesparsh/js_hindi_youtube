// for of
const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

//maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")

for (const [key,value] of map) {
    console.log(key,value)
}


// for objects -  for of looping system wont work thats we use for in

// for in works for object iterations 


//for in returns keys remember that in objects
//for of returns the array iterables ie the values





