// singleton 
// Object.create
// object literals
const mysym = Symbol("key1")

const jsUser = {
    name: "hitesh",
    age:18,
    [mysym]:"mykey1",
    location:"jaipur",
    email:"hitesh@google.com",
    isloggedin:false,
    lastLoginDays : ["Monday", "Saturday"]
}


// console.log(jsUser.email)
// console.log(jsUser["email"])

// console.log(typeof jsUser[mysym])
// console.log(jsUser[mysym])

// jsUser["email"] = "nareshgouttam@gmail.com"
// console.log(jsUser["email"])

// Object.freeze(jsUser) // after freezing the user we can't update it 

// jsUser["email"] = "nareshgouttam@yahoo.com"
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello Js User")
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greetingTwo());