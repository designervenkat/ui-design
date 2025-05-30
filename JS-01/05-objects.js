//Creating an Object using Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    'email id': 'something@gmail.com',
}

// Accessing and Modifying Properties
// console.log(person)

// Dot Notation
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)

// Bracket Notation
// console.log(person['firstName'])
// console.log(person['email id'])

// Modifying property

// person.lastName = 'Unknown'
// person['email id'] = 'sam@gmail.com'
// console.log(person)

// checking for properties with

// console.log(person.hasOwnProperty('city'))

// Iterating or loop over
// Find out how the values can be print
// for (let key in person) {
//     console.log(key)
// }

// Propeties in objects

// const keys = Object.keys(person)
// console.log(keys)

// const values = Object.values(person)
// console.log(values)

// const entries = Object.entries(person)
// console.log(entries)

// Copying and Merging Objects

const personClone = Object.assign({}, person)
// console.log(personClone)

// Merging
const additionalInfo = { salary: 20000, job: 'SDE' }

const updatedPerson = Object.assign({}, person, additionalInfo)

// console.log(updatedPerson)

// Prevent Modifications

// Object.freeze(updatedPerson)

updatedPerson.age = 50
updatedPerson.salary = 50000

// console.log(updatedPerson)

// const [] = superheros // Arrays destructure

// const { firstName, age, salary } = updatedPerson

// console.log(
//     `Hello ${firstName} and your age is ${age} and salary will be ${salary}`
// )

const { firstName: FN, salary: S } = updatedPerson

console.log(`Hello ${FN} and salary will be ${S}`)
