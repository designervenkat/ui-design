let text = 'Welcome,to,Javascript!'
let txt = 'Learn'

// .length : Returns the number of characters in string
// console.log(text.length)

// .slice : (start, end) : extract part of a string
// console.log(text.slice(11, 22))

// .substring : (start, end) : similar to slice but doesn't accept negtive indice
// console.log(text.substring(11, 22))

// .substr : (start, length) : Extracts a substring based on length
// console.log(text.substr(11, 22))

// .toUpperCase and .toLowerCase : change case to upper or lower
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())

// Search in strings

// Finds the first occurrence of substring
// console.log(text.indexOf('to'))

// .lastIndexOf("string") finds the last one
// console.log(text.lastIndexOf('to'))

// .includes check if string contain or not
// console.log(text.includes('Python'))

// Replace Text
// console.log(text.replace('Welcome', 'World'))
// console.log(text.replaceAll('Javascript', 'React'))

// Removing whitespace

// console.log(text)
// console.log(text.trim())
// console.log(text.trimStart())
// console.log(text.trimEnd())

// Splitting & Joinning Strings

// console.log(text.split(','))
// console.log(text.concat(', ', txt))
