//forEach loop

const coding = ["js","Java", "Python", "ruby", "cpp"]


//  we shouldn't name the function so we just directly call the function without calling it anything

// coding.forEach( function (item) {    
//     console.log(item)
// })


// we can also use arrow function 
// coding.forEach((item) => {console.log(item) })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr)
    
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach((item)=>{
    console.log(item.languageFileName)
    console.log(item.languageName)
})