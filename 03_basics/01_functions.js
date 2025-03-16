

function sayMyName() {
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

function addTwoNumbers (number1, number2){
    // console.log( number1+number2)
    // let result = number1 + number2 
    // return result
    return number1+number2
   

}

const result =  addTwoNumbers(3,4)

// console.log(`result : ${result}`);

function loginUserMessage(username ="sam"){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



function CalculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(CalculateCartPrice(200,400,500,2000))

const user = {
    username : "naresh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({username:"gopal",
    price:"399"
})

const myNewArr =[200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log (returnSecondValue(myNewArr));
console.log (returnSecondValue([400,800,4200,1400]));
