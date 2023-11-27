function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, pass) {
  SetUsername.call(this,username);
  this.email = email;
  this.pass = pass;
}

const me = new createUser("sparsh", "sparsh@gmail.com", 1234);

console.log(me);