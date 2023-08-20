// Strings

const name = "Prashant";
const repoCount = 50;

// console.log(name + repoCount + " value") ; now a days not to use this method for string concat

// to use below method using backstick ``
// this is modern method


// console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('Prashant-pr');
// console.log(gameName);
// console.log(gameName[0])//P
// console.log(gameName.__proto__)//{}

// console.log(gameName.length);// 11
// console.log(gameName.toUpperCase());// PRASHANT
// console.log(gameName.charAt(5));//  a
// console.log(gameName.indexOf("t"));//  7


// const newString = gameName.substring(0,4);
// console.log(newString)// Pras

// const anotherSrting = gameName.slice(-8,4)
// console.log(anotherSrting)

const newStringOne = "            Prashant      "
// console.log(newStringOne);//            Prashant      
// console.log(newStringOne.trim())// Prashant

const url = "htps://prahsant.com/prahat%20kumar";
console.log(url.replace('%20','-'));
// console.log(url)//htps://prahsant.com/prahat%20kumar


console.log(url.includes('prshant'));//false
console.log(gameName.split("-"))//[ 'Prashant', 'pr' ]