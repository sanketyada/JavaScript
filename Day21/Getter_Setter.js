// getter setter
class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get email(){
        return`${this._email.toUpperCase()}`
    }
    set email(val){
        this._email=val
    }
    get password(){
        return `${this._password}#113`
    }
    set password(val){
        this._password=val
    }
}
let userOne= new User("ravish@gmail.com","tinton")
console.log(userOne.email)
console.log(userOne.password)
