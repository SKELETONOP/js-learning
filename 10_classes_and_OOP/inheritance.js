class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }

    addCourse(course){
        console.log(`${this.username} added ${course} course`);
    }
}


const chai = new Teacher("chai", "maths");
chai.logMe();
chai.addCourse("science");
console.log(chai);


const masalaChai = new User("masalaChai");
masalaChai.logMe();
// masalaChai.addCourse("english");


console.log(chai instanceof Teacher); // true