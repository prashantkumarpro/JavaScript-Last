// Function in JS

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2)
// }
// const result = addTwoNum(4, "5")
// console.log(result)
// console.log("Result ", + result);


// function addTwoNum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// const result = addTwoNum(4, 5)

// console.log("Result ", + result);// Result 9


// function addTwoNum(num1, num2) {
//     let result = num1 + num2;
//     console.log("Prashant")// Prashant
//     return result;
// }
// const result = addTwoNum(4, 5)

// console.log("Result ", + result);// Result 9



// function loginUserMessage (username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Prashant"));//Prashant just logged in

// function loginUserMessage (username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());//undefined just logged in


// function loginUserMessage (username){
//     if(username === undefined){
//         console.log("please enter a username")
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());//undefined just logged in

function loginUserMessage(username) {
    if (!undefined) {
        // console.log("please enter a username");//please enter a username
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());//undefined 


// // rest operetaor
// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200, 300, 400));

// function calculateCartPrice(num1, num2, ...num){
//     return num;
// }
// console.log(calculateCartPrice(200, 300, 400,888));// [400, 800]


// const user = {
//     userName: "Prashant",
//     price: 999
// }

function handleObject(anyObject) {
    // console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
    //username is Prashant and price is 999
};

// handleObject(user);
// handleObject({
//     userName:'sam', 
//     price : 399
// });


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
};
// console.log(returnSecondValue(myNewArray));// 400
// console.log(returnSecondValue([200, 400, 100, 600]));// 400



const user = {
    // username : "prashant", 
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username},  welcome to website`)
        // console.log(this)
    }
}
// welcomeMessage() // welcomeMessage is not defined
user.welcomeMessage()// prashant,  welcome to website
user.username = "Sam";
user.welcomeMessage()//Sam,  welcome to website


// function chai (){
//     let userName = "Prashant";
//     console.log(this.userName)// undefined
// }
// chai()


// const  chai = ()=> {
//     let userName = "Prashant";
//     console.log(this)// {}
// }


// chai()