function createUser(name,age){
    return {name: name , age: age}
}

class User{
constructor(name,age){
    this.name = name
    this.age=age
}
printName(){
    console.log(this.name)
}
}

const user1 = new User("khalid", 24)
console.log(user1.name)