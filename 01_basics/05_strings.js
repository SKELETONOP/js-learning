const name = "naresh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Gouttam-naresh-kanha-swati")
console.log(gameName.__proto__);
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4);
console.log(newString);


const antherString = gameName.slice(-6,4)
console.log(antherString);

const newString1 ="       naresh      "
console.log(newString1);
console.log(newString1.trim());

const url = "https://www.purplelove.in/products%20new"
console.log(url.replace("%20", "_"));

console.log(gameName.split("-"));
