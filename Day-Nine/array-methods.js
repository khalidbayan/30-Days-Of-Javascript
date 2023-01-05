// forEach: loops through each element in array 

const a = [1,2,3,4,5]
// const b = [2,4,6,8,10]

a.forEach((number, index) =>{
  
    console.log(number + " : " + index)
})

// we use map to make new array from a defined array
const newA = a.map((number)=>{

    return number*2

})

console.log(newA)



// filter method: return new array filtered
const filterA = a.filter((number)=>{

        return number>2
})
console.log(filterA)

// find method: return first found true value
const n = a.find((number)=>{return number>3})
console.log(n)


// some method and every:
// some: atleast one should be true to return true
// every: every value should be true to return true

const isTrue = a.some((number)=>{
    return number>2
})
console.log(isTrue)

const isTrue2 = a.every((number)=>{
    return number>2
})
console.log(isTrue2)

// reduce method: return singular value and takes atleast 2 params

const r = a.reduce((sum,number)=>{
    return sum+number
})

console.log(r)

const items = [
    {price: 10},
    {price: 20},
    {price: 30},
    {price: 40},
]

// 0 means that we make default sum = 0
const total = items.reduce((sum,item)=>{
        return sum + item.price
},0)
console.log(total)