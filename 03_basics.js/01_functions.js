function addition (number1,number2){    
    // console.log(number1 + number2)
}

function addition_return (number1,number2){    
    return (number1 + number2)
}

addition(2,3)

const result = addition_return(3,6)

// console.log("Result is:" ,result)


function loginUserMessage (username = "User"){
    if(!username){
        // console.log("Username not entered")
        return
    }else{
        return `${username} just logged in!`
    }
}

// console.log(loginUserMessage())


function calculateCartPrice (...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,500))