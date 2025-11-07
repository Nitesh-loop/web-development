# Arrays
Use .push, .pop, .shift, and .unshift to Manipulate Arrays     (FILO)

1. PUSH
let numbers = [1,2,3,4]
numbers.push(5)
console.log(numbers) // [1,2,3,4,5] 

numbers.push(5,6,7,8)
console.log(numbers) // [1,2,3,4,5,6,7,8]


2. POP
let fruits = ["🍏", "🍊", "🍌"]

fruits.pop() // "🍌"
console.log(fruits) // ["🍏", "🍊"]

fruits.pop() // "🍊"
console.log(fruits) // ["🍏"]

fruits.pop() // "🍏"
console.log(fruits) // []

fruits.pop() // undefined
console.log(fruits) // []


3. UNSHIFT

let numbers = [2,3,4]
numbers.unshift(1)

console.log(numbers) // [1,2,3,4] 


let letters = ["b","c","d","e"]
console.log(letters.length) // 4

let newLength = letters.unshift("a")
console.log(newLength) // 5
console.log(letters) // ["a","b","c","d", "e"]
console.log(letters.length) // 5


4. SHIFT
let fruits = ["🍏", "🍊", "🍌"]

fruits.shift() // "🍏"
console.log(fruits) // ["🍊", "🍌"]

fruits.shift() // "🍊"
console.log(fruits) // ["🍌"]

fruits.shift() // "🍌"
console.log(fruits) // []

fruits.shift() // undefined
console.log(fruits) // []