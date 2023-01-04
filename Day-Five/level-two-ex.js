// Exercises Level 2

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// 2 methods to change string to array
// let text_array = new Array(text)
// let text_array = [text]

// split changes string to array and split it on space for ex
let text_split = text.split(' ')
console.log(text_split)
console.log(text_split.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(4,5)
console.log(shoppingCart)

shoppingCart[3] = "Green Tea"
console.log(shoppingCart)


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)