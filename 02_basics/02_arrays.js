const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//how to merge

// const newArr = marvel_heroes.concat(dc_heroes)

// console.log(newArr)

const allHeroes = [...marvel_heroes,...dc_heroes]

console.log(allHeroes)


const two_d_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const one_d_array_converted = two_d_array.flat(Infinity)

console.log(one_d_array_converted)

