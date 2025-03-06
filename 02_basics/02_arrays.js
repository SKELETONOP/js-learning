let marvelHeroes = ["thor", "Ironman", "Spidermen"];
let dcHeroes = ["Batman", "superman", "Wonderwoman"];


// **********************push method (which we don't use)*************************
// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1])


// *******************concat method*************** 
// let allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)


// ***********spread opreater*************

const allHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allHeroes)



const another_arr= [1,2,3,[4,5,6],7,[8,[9]]]

const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr)


console.log(Array.isArray("Naresh"))
console.log(Array.from("Naresh"))
console.log(Array.from({name:"Naresh"})) // important situation because of the interview.


let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of(score_1, score_2, score_3))