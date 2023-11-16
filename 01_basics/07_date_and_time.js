let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


let myCreatedDate = new Date(2023,10,8)
// console.log(myCreatedDate)


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()

newDate.toLocaleString('default',{
    weekday: "long",
})