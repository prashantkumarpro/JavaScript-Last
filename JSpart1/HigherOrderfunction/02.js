// for in

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObj) {
//   console.log(key)
// }
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`)

    //   js shortcut is for JavaScript
    // cpp shortcut is for C++
    // rb shortcut is for ruby
    // swift shortcut is for swift by apple
}

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
//    console.log(programming[key])
}


const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('Fr', "France");

for (const key in map) {
//  console.log(key) // map is not itreable
}

