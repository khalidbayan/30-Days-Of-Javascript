// Use the Date object to do the following activities

const time  = new Date()
console.log(time)

// What is the year today?
console.log(time.getFullYear())

// What is the month today as a number?
console.log(time.getMonth())


// What is the date today? Since it's 3/1/2023 today
console.log(time.getDate()) // 3

// What is the day today as a number?
console.log(time.getDay()) // 2 since its tuesday
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

// What is the hours now?
console.log(time.getHours())

// What is the minutes now?
console.log(time.getMinutes())

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(time.getTime())






// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// let base = prompt("Enter base" , 'Number goes here')
// let height = prompt("Enter height" , 'Number goes here')

// let result = alert("the result is: "  + base*height)


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.


let birth_year = prompt("Enter your birth year")
let this_year = 2023
let your_age = this_year - birth_year

your_age > 18 
? console.log("you are allowed to drive") 
: console.log("you are not allowed to drive")

console.log(`you are ${your_age}`)

