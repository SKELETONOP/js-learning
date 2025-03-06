//arrays
const arr =[0, 1, 2, 3, 4, 5]
const myHeros = ["sahaktimaan", "naagraj"]

const myarr2 = new Array(1,2,3,4)
console.log(myHeros[1]);


// array methods

// arr.push(6)
// arr.push(9)
// arr.pop()

// arr.unshift(9)
// arr.shift()

console.log(arr.includes(9))
console.log(arr.indexOf(3))


// const newArr = arr.join()
// console.log(newArr)
// console.log(typeof(newArr));


// slice and splice

console.log("A", arr);
const myn1 = arr.slice(1,3)
console.log(myn1)

console.log("B", arr);

const myn2 = arr.splice(1,3)
console.log("c" , arr);

console.log(myn2)


