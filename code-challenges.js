// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 
// input: number
// output: string with number

// Process
// to test if my code works, I'll need to console.log each variable compared to the reference number 212 and output the corresponding message based on whether it's below, at, or above the boiling point.

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

// Function
// const boilPoint = (actualTemp, boilTemp) => {
//     if(actualTemp < boilTemp) {
//         return '${actualTemp} is below boiling point'
//     }   else if (actualTemp === 212){
//         return '${actualTemp} is at boiling point'
//     }   else {
//         return `${actualTemp} is above boiling point`
//     }
// }
// console.log(boilPoint(temp1, 212))
// returns: "${actualTemp} is below boiling point"
// At this point, I referenced additional assessments and realized the code was way simpler than what I typed. I don't entirely understand what I was thinking with the above code.

const boilingPoint = (temp) => {
    if (temp > 212){
        return `${temp} is above boiling point`
    } else if (temp < 212){
        return `${temp} is below boiling point`
    } else{
        return `${temp} is at boiling point`
    }
}
console.log(boilingPoint(temp1))
// output: "42 is below boiling point"
console.log(boilingPoint(temp2))
// output: "350 is above boiling point"
console.log(boilingPoint(temp3))
// output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 
// input: variable name of the array of numbers
// output: length of combined array
// Process: I will need a function using index to return the length of the two arrays combined. Used Google to learn how to use the "..." spread operator.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

var bothArrays = [...padres1984WorldSeriesRuns, ...padres1998WorldSeriesRuns]
console.log(bothArrays.length)
// Expected output: 9
// Actual output: 9

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
// Same output but uses a different method to combine the arrays and output the length

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 
// input: string
// output: "2202 letoH"
// Process: create a variable that splits the string into an array that can be reversed and combined back into a string. 
// The commented console.log(currentCohort.split("").reverse().join("")) was my initital test. I realized I could test an idea immediately with a console.log. After seeing the result in terminal, I wrote the variable reverseClass to match my tested theory of the console.log.

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"
var reverseClass = (currentCohort.split("").reverse().join(""))

// console.log(currentCohort.split("").reverse().join(""))
console.log(reverseClass)

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: 
// input1: 42 
// output1: 7
// input2: 10
// output2: 8
// Process: Evolving understanding happening here...use of lastIndexOf()to return givenValue1 and givenValue2 outputs.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(givenValue1))
// Expected output: 7
// Actual output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))
// Expected output: 8
// Actual output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: 
// input: variable names for array being sorted
// output: sorted array in descending numbers
// Process: use sort and reverse 

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

console.log(sanDiegoSummerTemperatures.sort().reverse())
// Output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoWinterTemperatures.sort().reverse())
// Output: // Expected output: [68, 67, 66, 66, 62, 59, 59]