// for of

// ["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"
const newArr =[]
for (const greet of greetings){
    if(greet === " "){
        continue
    }
    else{newArr.push(greet)}
}

// console.log(newArr)

// MAPS

const map = new Map ()
map.set('IN', "INDIA")
map.set('PAK', "PAKISTAN")
map.set('SA', "SOUTH AFRICA")


//console.log(map)

for(const [key, value] of map){
    console.log(`${key} :- ${value}`)
}


const myObject = {
    game1 : "NFS",
    game2 : "BGMI"
}

// for (const [key, value] of myObject){
    // console.log(`favourite game is ${key} and name of the game is ${value}`)
//}