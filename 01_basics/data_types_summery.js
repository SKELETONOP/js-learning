// premitive data types

// types 7 : String, Number, Boolean, NULL, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// refernece type aur Non Premitive Data Types

// Array, Objects, Functions

const heros = [ "shaktiman", " naagraj", " doga"]
let Obj = {
    name: "Naresh",
    age: 16,
}

const Myfunction = function() {

    console.log("Hello world");
    
    
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3


// stack (premitive), heap (non premetive)

let myyoutubename = "nareshgouttam.com"
let anothername = myyoutubename
anothername = "Lucifer Gaming"

console.log(anothername)
console.log(myyoutubename)

let userOne = {
    email: "nareshgouttam@gmail.com",
    upi : "naresh@ybl"
}

let userTwo = userOne

userTwo.email = "kamaljoshi257@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)