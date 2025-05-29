// Arrays always start with 0 index
let superheros = ['Superman', 'Ironman', 'Flash', 'Batman']

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

const array1 = [5, 12, 8, 130, 44]

let filteredNums = array1.filter((num) => num > 10)

console.log(filteredNums)
