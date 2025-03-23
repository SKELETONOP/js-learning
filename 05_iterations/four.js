//for in

const myObject={
    js:'javascript',
    cpp:'c++',
    py:'python',
    css:'cascading style sheets'
}

for (const key in myObject) {
    // console.log(`the short cut we use for ${myObject[key]} is ${key}`)
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    
}


 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")


 for (const key in map) {
    // console.log(key);  {it will return nothing because this is not ittrable}
 }