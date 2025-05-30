// Arrays always start with 0 index

// Add elements to end of the arrays
// superheros.push('Captain')

// Remove element to the last from arrays
// superheros.pop('Captain')

// Add element to the begining
// superheros.unshift('Bruce')

// Remove the first element
// superheros.shift()

// splice() Add or remove elements at a specific index

// superheros.splice(0, 1, 'Bruce')

// Search the index of item
// console.log(superheros.indexOf('Ironman'))

// check if an element is present
// console.log(superheros.includes('Bruce'))

// find the first matching element
// let numbers = [10, 20, 30, 40, 50]
// // let found = numbers.find((num) => num > 20)
// // console.log(found)

// let found = numbers.findIndex((num) => num > 25)

// console.log(found)

// const array1 = [5, 12, 8, 130, 44]

// const isLargeNumber = (element) => element > 131

// console.log(array1.findIndex(isLargeNumber))

// Access elements inside array with index number

// console.log(superheros[0])
// console.log(superheros[1])
// console.log(superheros[2])

// superheros.forEach((item) => console.log(item))

// superheros.map((item) => console.log(item))

// const array1 = [5, 12, 8, 130, 44]

// let filteredNums = array1.filter((num) => num > 10)

// console.log(filteredNums)

// Destructuring Arrays

let superheros = ['Superman', 'Ironman', 'Flash', 'Batman']

// Using the braket notation
// console.log(superheros[3])
// console.log(superheros[2])
// console.log(superheros[1])
// console.log(superheros[0])

// Destructuring
// const [first, second, third, fourth] = superheros

// Skipping element  / items
// const [first, second, , fourth] = superheros

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fourth)

// Using the rest operator

// const [first, ...others] = superheros
// console.log(first)
// console.log(others)

// let a = 1
// let b = 2

// ;[a, b] = [b, a]
// console.log(a, b)

// Convert items into arrays
const str = 'hello'
// console.log(typeof str)

// const arrFromStr = Array.from(str)
// console.log(arrFromStr)
// console.log(typeof arrFromStr)

// Spread Operator
// const newArr = [...str]
// console.log(newArr)

// Convert using Set Method
// const newSetArray = new Set([1, 2, 3])
// const arrFromSet = [...newSetArray]
// console.log(arrFromSet)

const arrFromSplit = str.split('')
// console.log(arrFromSplit)

// splitting by space to get words

const sentence = 'Convert this sentence into words'

const words = sentence.split(' ')
console.log(words)
console.log(words[4])
