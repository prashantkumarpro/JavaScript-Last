// forEach


const coding = ['js', 'java', 'ruby', 'python', 'cpp'];

// coding.forEach(function (item) {
//     // console.log(item)
// });

// coding.forEach((val) => {
//     // console.log(val)
// })

// function printMe(item){
//     // console.log(item)
// };

// coding.forEach(printMe)


const values = coding.forEach((item) => {
    // console.log(item)
    return item;

    // forEach value return nahi karta hai
})
console.log(values)


const myCoding = [
    {
        languageName: "javaScript",
        langFileName: "js"
    },
    {
        languageName: "java",
        langFileName: "java"
    },
    {
        languageName: "python",
        langFileName: "py"
    },

]

myCoding.forEach((item) => {

    // console.log(item.langFileName)
})



