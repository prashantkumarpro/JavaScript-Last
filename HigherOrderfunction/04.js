const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 5)
// console.log(newNums); //[ 6, 7, 8, 9, 10 ]


// const newNums = myNums.filter((num) => {
//     return num > 5;
// })
// console.log(newNums); //[ 6, 7, 8, 9, 10 ]



const newNums = [];

myNums.forEach((item) => {
  if (item > 4) {
    newNums.push(item)
  }
})

// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(Object.keys(recordCollection))
// console.log(Object.values(recordCollection) === recordCollection.hasOwnProperty("ABBA Gold"))

const bookCollection = [
  { title: 'Book One', genre: "Fiction", publish: 1987, edition: 2010 },
  { title: 'Book Two', genre: "History", publish: 1986, edition: 2014 },
  { title: 'Book Three', genre: "Fiction", publish: 2011, edition: 2016 },
  { title: 'Book Four', genre: "History", publish: 1981, edition: 1989 },
  { title: 'Book Five', genre: "Fiction", publish: 1987, edition: 2022 },
  { title: 'Book Six', genre: "Non-Fiction", publish: 2015, edition: 2019 },
]

let userBook = bookCollection.filter((bk) => bk.publish >= 2019)
console.log(userBook)