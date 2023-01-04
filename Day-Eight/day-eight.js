// OBJECTS: 

// LEVEL 1 EXERCISES

// Create an empty object called dog
let dog = {}
// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. 
// The bark property is a method which return woof woof

dog = {

    name: "Hawhaw",
    legs : "German shephard",
    color : "white",
    age: 10,

    bark: function(){
        return "woof woof"
    }
}


// Get name, legs, color, age and bark value from the dog object
console.log(dog.name,dog.legs,dog.age,dog.color)
console.log(dog.bark())

// Set new properties the dog object: breed
dog.breed = 'snoopdoog'

console.log(dog)