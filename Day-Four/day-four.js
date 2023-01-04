// Exercises: Level 1

// Get user input using prompt(“Enter your age:”). 
// If user is 18 or older , give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let your_age = prompt("Enter your age")
// if (your_age > 18){
//     prompt("you are allowed to drive")
// } else {prompt("you aren't allowed to drive")}


// let a = 4
// let b = 3

// a > b ? console.log("a is greater than b") : console.log("b is greater than a ")


// let your_num = prompt("Enter number")
// if (your_num % 2 == 0){
//     console.log(`${your_num} is even`)
// }
//      else{
//         console.log(`${your_num} is odd`)
//     }

// Check if a day is weekend day or a working day.
//  Your script will take day as an input.

let check_day = prompt("enter day of the week")
let day =check_day.toLowerCase()
console.log(day)
switch(day){
    case 'monday':
        console.log("today is weekday")
        break
    case 'tuesday':
            console.log("today is weekday")
            break
    case 'saturday':
                console.log("today is weekend")
                break
}


