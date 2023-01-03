
// Level 2 Exercises:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(`The quote 'There is no exercise better for the heart than reaching down
 and lifting people up.' by John Holmes teaches us to help one another.
`)


// Using console.log() print out the following quote by Mother Teresa:
let quote = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`
console.log(quote)

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num1 = '10'
let num2 = 10

console.log(num1 === num2)

let num3 = parseInt(num1)

console.log(num3)
console.log(num3 == num2)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let floatStr = '9.8'
console.log(Math.ceil(floatStr))
let floatToNum = parseInt(floatStr)
console.log(floatToNum)


// Check if 'on' is found in both python and jargon

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence_two = 'I hope this course is not full of jargon.'
console.log(sentence_two.match('jargon'))


// Generate a random number between 0 and 100 inclusively.
let randInt = Math.random(0,100)*100
console.log(Math.floor(randInt))

// Generate a random number between 50 and 100 inclusively.
let randIntTwo = Math.random(50,100)*100
console.log(Math.floor(randIntTwo))

// Generate a random number between 0 and 255 inclusively.
let randIntThree = Math.random(50,255)*255
console.log(Math.floor(randIntThree))
 
