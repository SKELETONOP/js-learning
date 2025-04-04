// const user 1 = {
//     username:"naresh",
//     loginCount: 8,
//     signedIn : true,

//     getUserDetails : function(){
//         // console.log("Got User Details From Database")
//         // console.log(`Username : ${this.username}`)
//         console.log(this);
        
//     }
// }


// console.log(user.username);

// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome${this.username}`)
    }
    return this
}


const userOne = User("naresh", 5, true);
// const userTwo = new user("kamal", 6, false);
console.log(userOne.constructor);
// console.log(userTwo);
