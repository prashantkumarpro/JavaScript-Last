// // Object litrels - matalab ki ye literly object hai 
// const user = {
//     username: "Prashant",
//     loginCount: 8,
//     signedIn: true,


//     getUserDetails: function () {
//         // console.log('got user details from database')
//         // console.log(`Username : ${this.username}`);//  Prashant
//         console.log(this);
//         // output will be 
//         // {
//         //     username: 'Prashant',
//         //     loginCount: 8,
//         //     signedIn: true,
//         //     getUserDetails: [Function: getUserDetails]
//         //   }
//     }
// }


// // corrent context ka matlab hai ki hum current chijo ki bate kar raha hu 

// console.log(user.getUserDetails()); // got user details from database

// // yeadi globle context men this ko print karayenge to 
// console.log(this) // Output will be {} in the node invoirment  but broweser me bahut sari context hoga jaise ki windo object milta hai go ki globle object hai


// new keyword actully me naya context banane ke liye kam aata hai aur isi ko hum constructor function bolate hai 
// const promiseOne = new Promise(); 
// const date = new Date()


// function to ek hi bar run hota hai , ek hi globle excutation context hota hai vahi pe ho jata hai 
function User(username, loginCount, isLoggedIn) {
    this.username = username; // this.usename -ye veriable hai 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

this.greeting = function(){
    console.log(`Welcome ${this.username}`)
}
    return this;
}


const userOne =new  User('Prashant', 12, true)
const userTwo = new User('chaiAurCode', 11, false)// now userOne me chaiAur code aayega uername ki jagah par kyoki uerTwo no sari ki sari value ko overwrite kar di 

// console.log(userOne)
console.log(userOne.constructor) // [Function: User] matlab ki constructor hame khud ki refrences deta hai
// console.log(userTwo)


// when use a new keyword 
// 1st of all create a new Object jisko instance bola jata hai
// 2nd a constructor function call hota hai new keyword ke karan ye sabhi arguments ko peck karta hai aur hame de deta hai 
// 3rd this keword(arguments) hai vo inject ho jate hai 
// function ke andar mil jata hai 