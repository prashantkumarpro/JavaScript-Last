const marvel_heros = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['supermen', "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// let concatedAr = marvel_heros.concat(dc_heros);
// console.log(concatedAr);//[ 'thor', 'ironman', 'spiderman', 'supermen', 'flash', 'batman' ]

// const allNewHeros = [...marvel_heros, ...dc_heros];
// console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]];
const real_anoher_array = another_array.flat(Infinity);
// console.log(real_anoher_array );
//[
//     1, 2, 3, 4, 5,
//     6, 7, 4, 5    
//   ]


// console.log(Array.isArray("Prahant"));//false
// console.log(Array.from("Prahant"));//
// console.log(Array.from({name:"Prashant"}));//[] interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]

