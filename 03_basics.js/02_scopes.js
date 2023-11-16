if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(c)
//isko print kruga tog print ho jayega kyuki yeh var stored hei and thats the only issue 
//isko avoid krne ke liye let and const used

//closure

//chota baccha ice cream bado se cheen sakta hei but not the opposite is likely
//thus two can use username but here one function that is bada cant use the website outsite 

function one(){
    const username = "sparsh"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
    two()
    // console.log(website)

}

one()