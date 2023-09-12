// Scope => 
// let, var, const

// {} is a scope jab ye kisi function, if else me aata hai to isko scope kahte hai 

// let a = 10;
// const b = 20;
// var c = 30;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}




// console.log(a) a is not defiende
// console.log(b)
// console.log(c)// 30


if (true) {
    const username = "prshant"
    if (username === "prshant") {
        const website = "youtube"
        console.log(username + website)
    }
    console.log(website)
}

// console.log(username)

function one() {
    const username = "prashant"
    function two() {
        const website = "youtube"
        console.log(username)
    }
    two()
    // console.log(website)
}
// one()



