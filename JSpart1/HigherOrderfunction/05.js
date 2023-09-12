
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map(function (value) {
//     return value + 2;
// });
// console.log(newNumbers)

// const newNumbers = myNumbers.map((item) => item + 10);

// cahinning method on map
const newNumbers = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

// console.log(newNumbers)

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc + currval;
// },0)


const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);//6

const course = [
    {
        itemName: "Web dev course",
        price: 3999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Science  course",
        price: 12999
    },
]

course.forEach((item, index,arr)=>{
    console.log(item, index, arr)
})
