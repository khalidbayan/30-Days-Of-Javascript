// DAY SEVEN : FUNCTIONS

// many number of args, access through argument object
// function sumAllNums(){
//     let sum = 0 ;
//     for (let i = 0 ; i<arguments.length ; i++){
//         sum+=arguments[i]
//     }
//     return sum
// }

// console.log(sumAllNums(1,2,3))
// console.log(sumAllNums(1,2,3,10,12))
// console.log(sumAllNums(1,2,3,10,12,13))


// Anonymous Function

// const anonFunction = function (){
//     console.log("this is an anon function")
// }
// console.log(anonFunction())



// Declare a function fullName and it print out your full name.
// function fullNameGreeting(){
//     console.log("My name is Khalid Bayan")
// }
// fullNameGreeting()


// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNameGreeting(firstName, lastName){
     return `${firstName} ${lastName}`
}
let result = fullNameGreeting("khalid", "bayan")
console.log(result)



// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1,num2){
    return (num1+num2)
}

console.log(addNumbers(1,3))

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// function areaOfRectangle(length,width){
 
//     return area= length *width
// }

// console.log(areaOfRectangle(10,2))


// DETERMINE BMI:

function BMICalculator(weight,height){

    let bmi = weight/(height*height)
    if(bmi<18){
        console.log("you are underweight")
    }else if (bmi > 18.5 && bmi < 24.9){
        console.log("normal weight")
    }else{
        console.log("overweight")
    }
    return bmi   
}

console.log(Math.floor(BMICalculator(63,1.8)))
 
