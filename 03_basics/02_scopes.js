// var c = 300;
let a = 200;

if (true) {
    let a = 10;
    const b = 20;
    // console.log(`inner : ${a}`)
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "naresh"
    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)

    two()
}

// one()


if(true){
    const username ="naresh"
    if(username === "naresh"){
        const website = " youtube"
        //console.log(username + website)
    }
    // console.log(website);
    
}

// console.log(username);



// ++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++
console.log(addone(5));
 
function addone(num){
    return num + 1
}



console.log(addtwo(5))
const addtwo = function (num){
    return num + 2
}

