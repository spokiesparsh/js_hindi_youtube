const promiseOne = new Promise(function (resolve, reject) {
  //Do async task
  //db calls, cryptography tasks, network callss
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 also resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "example@gmail.com" });
  }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Sparsh", pass: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myusername) => {
    console.log(myusername);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is settled");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "js", pass: "12345" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
 try{
    const response = await promiseFive;
    console.log(response)
 }catch(err){
    console.log(err)
 }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = JSON.parse(await response.text())
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return  res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


