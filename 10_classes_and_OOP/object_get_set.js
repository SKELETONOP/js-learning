const User = {
    _email : "naresh@google.com",
    _password : "abc@257",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


const tea = Object.create(User)
console.log(tea.email);

