const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB task, CryptoGraphy, network
    setTimeout(function(){
        console.log("Async Task Is Complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise (function(resolve, reject){
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 Resolved")
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username:'naresh', email:'nareshgoutttam@gmail.com'})
    },1000)
})

promiseThree.then((user)=>{
    console.log(`my name is ${user.username} and my email is ${user.email}` );
})


const promiseFour = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username:"Gouttam", password : "21222"})
        }else{
            console.log("Something Went Wrong")
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(()=>{
    console.log("finally promise is either resolved aur rejected")
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({username:"Arpita", password:"123456789"})
        }else{
            reject("Error :: Someting Went Wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    
    } catch (error) {
        console.log(error)
        
        
        
        
    }
}

consumePromiseFive()



// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json()
//         console.log(data) 
//     } catch (error) {
//         console.log("E:", error);
//     }
    
// }

// getAllUsers()



fetch('https://api.github.com/users/skeletonop')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data);})
.catch((error)=>console.log(error))

