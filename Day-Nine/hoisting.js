// HOISTING EXPLAINED:

// we wrote console log before function and it work
// since hoisting will take functions to the top and execute them
// it won't work with arrow functions since it will be considered as a normal variable

console.log(addSum(1,4)) 

function addSum(a,b){
    return a+b
}