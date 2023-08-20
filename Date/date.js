// Date 
let myDate = new Date();

// console.log(myDate.toString())//Tue Jul 18 2023 07:35:24 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Tue Jul 18 2023
// console.log(myDate.toTimeString());//07:31:55 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString());//77/18/2023
// console.log(myDate.toLocaleTimeString());//7:30:45 AM
// console.log(myDate.toLocaleString());//7/18/2023, 7:29:27 AM
// console.log(myDate.toISOString());//2023-07-18T01:57:44.947Z
// console.log(myDate.toJSON());//2023-07-18T01:58:56.012Z

// console.log(typeof myDate)// object

let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString())//1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString())//1/14/2023, 5:30:00 AM

// let myCreatedDate = new Date("02-14-2023"); // mm-dd-yy
// console.log(myCreatedDate.toLocaleString())//2/14/2023, 12:00:00 AM


let myTimeStamp = Date.now();
// console.log(myTimeStamp);//1689646450669
// console.log(myCreatedDate.getTime());//1674412200000

// convert in second

// console.log(Math.floor(Date.now()/1000));//1689646658


let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getFullYear());//2023
// console.log(newDate.getDate());//18 
// console.log(newDate.getDay());//2 


let d = newDate.toLocaleString('dafault',{
    weekday:"long",
   
});
console.log(d)




