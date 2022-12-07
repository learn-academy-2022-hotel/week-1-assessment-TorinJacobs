// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: It returned 10 because that is the length of the string

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: It returned o because it's calling the index index element at 4 which is o

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Javascript
// b) Verify and explain: It's Ruby because it's calling upon the index 1 string not index 0 string

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: An error was produced because the array first required .map to iterate across the array in order for every letter to be capitalized with .toUpperCase

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: I want it to say something about there being 4 strings, because it's an array with all string elements due to the quotation marks.
// b) Verify and explain: returned "number" because the dataTypes.length created a numerical value (4) which typeof understands and outputs as "number"
