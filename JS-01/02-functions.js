// Functions

// Function Declaration - Named Functions
// function greeting(name) {
//     console.log('Hello', name)
// }

// greeting()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }
// addTwoNumbers(4, false)

// Functions Experssion

const addTwoNumbers = function (a, b) {
    console.log(a + b)
}

// addTwoNumbers(5, 5)

// Arrow Functions

const multiply = (a, b) => {
    console.log(a * b)
}

// multiply(5, 5)
// IIFE = Immediately Invoked Function Experssion
;(function () {
    console.log('IIFE Called')
})()
;(() => {
    console.log('IIFE Called - Arrow Function')
})()
;((num1, num2) => {
    console.log(num1 + num2)
})(5, 5)
;((name) => {
    console.log('Hello , ', name)
})('Bruce Wayne')
