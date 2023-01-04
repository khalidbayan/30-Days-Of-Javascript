// Exercises Level 1

// Declare an empty array;
// let empty_array = new Array()

// Declare an array with more than 5 number of elements
// let new_array = new Array('khalid','ali','hasan','rana','ahmad','hamza')

// Find the length of your array
// console.log(new_array.length)

// Get the first item, the middle item and the last item of the array
// let last_item = new_array.length-1
// console.log(new_array[0], new_array[last_item])



let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
lastItCompany = itCompanies.length-1
console.log(itCompanies[0],itCompanies[3],itCompanies[lastItCompany])

let eachItCompany = itCompanies.toString()
console.log(eachItCompany.toUpperCase())

if(itCompanies.indexOf('Google')){
console.log("company found")
}

let array_sort = itCompanies.sort()
console.log(array_sort)
console.log(array_sort.reverse())

// Slice out the first 3 companies from the array
let slicedFirst = itCompanies.slice(0,3)
console.log(slicedFirst)
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4))
// Slice out the middle IT company or companies from the array 
console.log(itCompanies.slice(3,4))

// Remove the first IT company from the array
console.log(itCompanies.shift())
console.log(itCompanies)

// Remove the last IT company from the array
console.log(itCompanies.pop())
console.log(itCompanies)

// Remove all IT companies
console.log(itCompanies.splice())
