// Array

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);
// console.log(myArr[0]);// 0


// const myHeors = ["Spidarment", "Captain America"];

// const myArr2 = new Array([1, 2, 3]);

// note : Array ko jab v js me copy opretation karenge ye shallow copy bantata hai
// matalb jo bhi change karenge vo original me bhi change karenge



// Array methods

// myArr.push(6);
// console.log(myArr);
// [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

// myArr.pop();
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

// myArr.unshift(9);
// console.log(myArr);
// [
//     9, 0, 1, 2,
//     3, 4, 5
//   ]

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(3))// 3

const neArr = myArr.join();
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
// console.log(neArr) // 0,1,2,3,4,5 (typeOf string)


// slice and splice
const myArrS1 = myArr.slice(1, 3);
console.log("B", myArrS1);//B [ 1, 2 ] slice range ko include nahi karta hai

const myArrS2 = myArr.splice(1, 3);
console.log(myArr)// splice origanal array ko bhi modify karta hai aur range ko bhi include karta hai
//  ye original array ko manupulate karta hai

console.log(myArrS2);// [ 1, 2, 3 ]