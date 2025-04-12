class User {
    constructor(username) {
        this.username = username;
    }
    
    logMe() {
        console.log(`Username is ${this.username}`);
    }

    static createId() {
        return this.username + Math.floor(Math.random() * 1000);
    }

    

    
}


const hitesh = new User("hitesh");
// console.log(hitesh.createId());


class Admin extends User {
    constructor(username, role) {
        super(username);
        this.role = role;
    }

    logMe() {
        console.log(`Username is ${this.username} and role is ${this.role}`);
    }
}
const hiteshAdmin = new Admin("hitesh", "admin");
// console.log(hiteshAdmin.createId());
console.log(hiteshAdmin.logMe());   
// Static methods are called on the class itself, not on instances of the class