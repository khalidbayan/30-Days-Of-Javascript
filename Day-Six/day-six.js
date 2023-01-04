// For Loops:

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']

const newCountries = []

for(let i=0; i<countries.length;i++){
    newCountries.push(countries[i])
}
console.log(newCountries)


// summing all elements in array
const numbers = [10,20,30,40]
let sum = 0

for (i=0;i<numbers.length;i++){
    sum+=numbers[i]
}
console.log(sum)
 
for (const country of countries){
    console.log(country)
}


// Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (i=0; i<10;i++){
//     console.log(i)
// }



// for (i=0; i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// let sum_two = 0
// for (i=0; i<=100;i++){
//     sum_two=sum_two+i
// }
// console.log(sum_two)


// let sum_even = 0
// let sum_odd = 0
// for (i=0; i<=100;i++){
//     if(i%2==0){
//         sum_even+=i
//     }
//     else{
//         sum_odd+=i
//     }
// }
// console.log(sum_even)
// let sumEvenArr = [sum_even]
// console.log(sumEvenArr)
// console.log(sum_odd)

// let sumOddArr = [sum_odd]
// console.log(sumOddArr)

// let sumArray = [sum_even, sum_odd]
// console.log(sumArray)




// Develop a small script which generate array of 5 random numbers

let randInt = Math.floor(Math.random(9)*10)
console.log(randInt)
let randIntArr = []

for (i=0; i<5; i++){

    randIntArr.push(randInt)
}

console.log(randIntArr)

// for (i=0; i<randInt; i++){
//     console.log(i)
// }