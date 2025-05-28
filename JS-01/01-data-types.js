// Javascript Data Types

// Primitive Data Types - Immutable and stored directly in memory

// String = " " / ''

let fullName = 'John'

// Number 25 , 99.99

let age = 25
let price = 99.99

// Boolean

let isLoggedIn = false // true

// undefined - variable is declared but value is not assigned

let city

// NULL - empty or unknown value

let email = null // out will be object - special case

// Symbol

let key1 = Symbol('01')
let key2 = Symbol('01')

//  BigInt - used for large numbers beyond the limit regular numbers

let bigNum = 123445678912344567891234456789n

// To check the data types - primitive data types
// console.log(typeof age)
// console.log(typeof price)
// console.log(typeof fullName)
// console.log(typeof isLoggedIn)
// console.log(typeof city)
// console.log(typeof email)
// console.log(typeof key2)
// console.log(typeof bigNum)

// Non Premitive Data Types - stored in memory by reference

// Object - stores in key - value pairs

let person = { name: 'John', age: 25 }

// Arrays - Special object - store the value

let colors = ['Red', 'Green', 1, true, { name: 'javascript', short: 'JS' }]

// Functions

function greet() {
    return 'Hello World!'
}

// Date

let currDate = new Date()

// Regex Experssion

let pattern = /\d+/

console.log(typeof person)
console.log(typeof colors)
console.log(typeof greet)
console.log(typeof currDate)
console.log(typeof pattern)
