// if 
// const isUserloggedIn = true;
if (2 == '2') {
    // console.log("executed")
}

// <, >, <=, >=, ==, !=, ===

const tempratrue = 41;

if (tempratrue === 41) {
    // console.log('less than 50')
} else {
    // console.log('temprature is greater than 50 ')
}
//  console.log('Executed')


const score = 200;

if (score > 100) {
    let power = 'fly'
    // console.log(`user power: ${power}`)
}

//  console.log(`user power: ${power}`);// power is not defined

const balance = 1000;

// if( balance > 500) console.log('test')

// not to use this way 
// if( balance > 500) console.log('test'),
// console.log('test2')

// else if 
// if (balance > 500) {
//     console.log("greater than 500")
// } else if (balance < 750) {
//     console.log('less than 750')
// } else if (balance < 900) {
//     console.log('less than 900')
// }


const  isUserloggedIn = true;
const debitCard = true;
const loggedInfromEmail = true;
const loggedInfromGoogle = true;


if ( isUserloggedIn && debitCard){
    // console.log('Allow to buy course')
}

if(loggedInfromEmail || loggedInfromGoogle){
    // console.log('User logged in')
}


const userEmail = '';

if(userEmail){
    // console.log('Got user Email')
} else{
    // console.log("Dont't have user email")
}

// falsy values

// false, 0. -0, BigInt 0n, null, undefined, Nan


// truthy values
// "0", 'false', '', [], {}, function(){}

if(userEmail.length === 1){
    console.log('Array is empty')
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log('Object is empty')
}


// Nullish Coalescing Operator (??) : null undefined

let val;
// val = 5 ?? 10
// console.log(val)// 5

// val = null ?? 10
// console.log(val)// 10

// val = undefined ?? 10
// console.log(val)// 10

// val = undefined ?? 10 ?? 5
// console.log(val)//10


// Terniary Operator

// condition ? true :false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less tan 80"): console.log("more than 80")




