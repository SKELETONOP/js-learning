// const tinderUser = new Object () --> singleton object
const tinderUser = {}   // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "naresh"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);


const regularUser ={
    email : "naresh@gmail.com",
    fullname : {
        userfullname:{
            firstname : "Naresh",
            lastname : "Gouttam"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname, regularUser.fullname.userfullname.lastname);


const obj1 = {
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}

// const obj3 = Object.assign({}, obj1, obj2) 

const obj3 = {...obj1, ...obj2}

// console.log(obj3)


const users = [
    {
        id:"1",
        email:"naresh@gmail.com"
    }
]

// users[1].email

// console.log (tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// Lacture 18 Yt video


const course = {
    name : "js hindi",
    price : "999",
    course_teacher :"naresh"
}

const {course_teacher : teacher} =course

console.log(teacher);

