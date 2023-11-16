const name = "hitesh";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: Hello my name is hitesh and my repo count is 50

const gameName = new String('hitesh-hc-com')

console.log(gameName.charAt(2));
// Output: t

console.log(gameName.indexOf('t'));
// Output: 2

const newString = gameName.substring(0, 4)
console.log(newString);
// Output: hite
// the last index is not included

const anotherString = gameName.slice(0, 4)
console.log(anotherString);
// Output: 

const url = "https://hitesh.com/hitesh%20choudhary"


const newStringOne = "   hitesh    "

console.log(newStringOne);
// Output: "   hitesh    "

console.log(newStringOne.trim());
// Output: "hitesh"

console.log(url.replace('%20', '-'));
// Output: "https://hitesh.com/hitesh-20choudhary"

console.log(url.includes('sundar'));
// Output: false

console.log(gameName.split('-'));
// Output: ["hitesh", "hc", "com"]

