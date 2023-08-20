"use strict"// treat all JS code as newer version 


// alert(2+2) // We are using node js not browser


// console.log(2

//     ) // code readabillity should be high

// console.log("prashant")



let age = 18;
let isLoggedIn = false;
let state = null;

// number => 2 to power 53
// bigint
// string =>""
// boolean => true/false
// null => standalone value
// undefined =>
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined


// let score = "33"
// console.log(typeof score); // string

// let scroe2 = 33;
// console.log(typeof scroe2); // number
// console.log(typeof (scroe2)); // number

// let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log( typeof userName)

// console.log(typeof Boolean); // function
// console.log(typeof Symbol); // function











// Data types in JS
// Primitive , Reference(non-primitive)

// primitive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// "33" => 33
// "33ab" => NaN
// true =>1, false => 0


let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);// 33
// console.log(typeof stringNumber);// string


// console.log(null >= 0)// true
// console.log(undefined == 0)// false
// console.log(undefined > 0)// false
// console.log(undefined < 0)// false







const bigNum = 112343453243242343244n;
// console.log(bigNum)//  112343453243242343244n;
// console.log(typeof bigNum)// bigint

// Reference (non-primitive)

const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anoterId = Symbol('123');
// console.log(id === anoterId);// flase






// Array, Objects, function

const heroes = ['Saktiman', 'nagraj', 'doga'];

let myObj = {
    name: "prashant",
    age: 23
}

// const myFunction = function () {
//     return console.log("Hello World!")
// }
// myFunction();

// console.log(typeof heroes);// Object
// console.log(typeof myObj); // Object
// console.log(typeof myFunction); // function 



let accountEmail = "prashant@gmail.com",
    accountPass = "1222434234",
    accountCity = "Bihar";
// console.log(accountEmail)//
// console.table([accountEmail, accountPass, accountCity]);

// Prefer not to use var
// because of issue in block scope and functional scope


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non-Primitive)

let myYoutubename = "CoderBano";
let anotherName = myYoutubename;
console.log(anotherName);// CoderBano
anotherName = "Prashant";

console.log(myYoutubename);//CoderBano
console.log(anotherName);// Prashant

let userOne = {
    email:"user@google.com"
}