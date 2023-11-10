// const tinderUser = new Object()  singleton

// const tinderUser = {} non-singleton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"c",6:"d"}

//remember this that we use target as an empty object such that all the later objects values get assigned to this target object

const obj4 = Object.assign({},obj1,obj2,obj3)

// console.log(obj4)
// console.log(obj1)



const course = {
    coursename: "JEE ADV",
    price: "999",
    courseInstructor: "hitesh"
}

// baar baar itna bada nahi likhenge so we use destructuring of the course object
// console.log(course.courseInstructor);


// to do that 
const {courseInstructor: teacher} = course

console.log(teacher)


