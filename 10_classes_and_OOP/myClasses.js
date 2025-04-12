// ES6

// class user{
//     constructor(username, password, email){
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }
//     encrypotPassword(){
//         return `this is the encrypted password for ${this.password}abc`;
//     }

//     changeUsername(newUsername){
//         this.username = newUsername;
//     }

// }

// const chai = new user('chai', 'chai123', 'chai@love.com');
// console.log(chai);

// console.log(chai.encrypotPassword());
// chai.changeUsername("nareshgouttam");
// console.log(chai);



// behind the scenes

function User(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encrypotPassword = function(){
    return `this is the encrypted password for ${this.password}abc`;
}
User.prototype.changeUsername = function(newUsername){
    this.username = newUsername;
}

const tea = new User("radha", "123456", "radha@swami.com")

console.log(tea);
console.log(tea.encrypotPassword());
tea.changeUsername("kamal");
console.log(tea);