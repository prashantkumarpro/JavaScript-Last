// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num)

}

const greetings = "Hello world!";
for (const greet of greetings) {
    // console.log(`Each cahr is ${greet}`);
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('Fr', "France");

// console.log(map)
//  'IN' => 'India',
// 'USA' => 'United States of America',
// 'Fr' => 'France'

for (const [key, value] of map) {
    // console.log( key, ":-", value)
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);// myObj is not iterable
// };


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value : ${i}`)

        // console.log(i + '*' + j + ' = ' + i * j)
    }
}


// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element)
// }


// for (let i = 1; i <= 20; i++) {
//     if(i ==5){
//         console.log('Detected 5');
//         break;
//     }
//     console.log(`Value of i is ${i}`)
// }

// for (let i = 1; i <= 20; i++) {
//     if(i ==5){
//         console.log('Detected 5');
//         continue;
//     }
//     console.log(`Value of i is ${i}`)
// }


// let index = 0;
// while (index <= 10) {
//     console.log(`value of index is ${index}`)
//     index = index + 2;
// }

let myArray = ["flash", "batman", "superman"];

let array = 0;

while (array < myArray.length) {
    console.log(`Value is ${myArray[array]}`);
    array = array + 1;
};

let score = 11;

do {
    console.log(`Score is ${score}`)
    score++
} while (score <= 10)