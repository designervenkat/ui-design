// iterations or loops

// for loops

// for (let index = 1; index < 5; index++) {
//     console.log(index)
// }

// for (let i = 0; i < numbers.length; i++) {
//     const item = numbers[i]
//     // console.log('Super Hero Name is : ', item)
//     console.log('Number : ', item)
// }

// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Outer loop : ${numbers[i]}`)

//     for (let j = 0; j < numbers.length; j++) {
//         console.log(`Inner loop : ${numbers[j]}`) // Template literals ES6 - React
//         // console.log("Inner loop : " + numbers[i])  // not recommended
//     }
// }

// break keyword
// for (let index = 0; index < 10; index++) {
//     if (index === 5) {
//         console.log('Found 5')
//         break
//     }
//     console.log(index)
// }

// continue - skip that condition
// for (let index = 0; index < 10; index++) {
//     if (index === 2) {
//         continue
//     }
//     if (index === 3) {
//         continue
//     }
//     if (index === 5) {
//         continue
//     }
//     if (index === 6) {
//         continue
//     }
//     console.log(index)
// }

// while

// let i = 0
// while (i < 10) {
//     console.log(`Value is : ${i}`)
//     // i = i + 2
//     i++
// }

// do while

// let num = 0

// do {
//     console.log(`Number is : ${num}`)
//     num++
// } while (num < 5)

// Higher Order Functions - Loops

// for of loops - iterating over arrays or strings

// const colors = ['Orange', 'Blue', 'Red', 'Green']
// const colors = 'Orange'

// for (const color of colors) {
//     console.log(`Each : ${color}`)
// }

// for in loops - iterating over the object properties

// const person = { name: 'John', email: 'something@gmail.com', city: 'newyork' }

// for (const key in person) {
//     // console.log(`Key : ${key}`)
//     // console.log(`Key : ${person[key]}`)
//     console.log(`Person : ${key} - ${person[key]}`)
// }

// const colors = ['Orange', 'Blue', 'Red', 'Green']
// const colors = 'Orange'
let superheros = ['Flash', 'Ironman', 'Superman']
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// forEach

// superheros.forEach((hero) => {
//     console.log(hero)
// })

// map - new array
// const newHeros = superheros.map((hero) => {
//     return hero
// })
// console.log(newHeros)

// const prices = [100, 200, 300, 400, 500]
// const discountedPrice = prices.map((price) => price * 0.9)
// console.log(discountedPrice)

// // filter create a subset of an array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNumbers = numbers.filter((num) => num % 2 === 0)
// console.log(evenNumbers)

// Triangle Pattern

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// solution
// let rows = 10
// let result = ''

// for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= i; j++) {
//         result += j
//     }

//     result += '\n'
// }

// console.log(result)

// Maths Tables
let result = ''

for (let i = 1; i <= 10; i++) {
    console.log(`Table for ${i}`)

    for (let j = 1; j <= 10; j++) {
        result = i * j
        // console.log(i + "*" + j + "=" + result);
        console.log(`${i} * ${j} = ${result}`)
    }
}

// Triangle Pattern 2

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// Triangle Pattern 3

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// Reverse

// 12345
// 1234
// 123
// 12
// 1

// Pyramid Pattern

//     1
//    123
//   12345
//  1234567
// 123456789
