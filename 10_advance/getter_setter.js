class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password(){
    return this._password.toUpperCase();
  }

  set password(value){
    this._password = value;
  }

}

const sparsh = new User("sparsh@email.com", "sparsh");

console.log(sparsh.password);
