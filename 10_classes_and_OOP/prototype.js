let myName = "Naresh     ";
let myChannel = "Lucifer     ";

// console.log(myName.trim().length);


let heros = ["thor", "ironman", "spiderman", "hulk"];


let heroPower = {
    thor: "hammer",
    ironman: "suit",
    spiderman: "web",
    hulk: "smash",

    getSpiderPower: function () {
        console.log(`spidey power is ${this.spiderman}`);
    }
};

Object.prototype.hitesh = function () {
    console.log("hitesh is present in all objects");
}

Array.prototype.Heyhitesh = function () {
    console.log("hitesh is present in all arrays");
}
// console.log(heroPower.spiderman);

// heroPower.hitesh()
heros.hitesh()
heros.Heyhitesh()
// heroPower.Heyhitesh()


// inheritance

const User = {
    name: "Naresh",
    email:"naresh@gouttam.com",
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvilable: true,
};

const TAsupport = {
    makeAssignments: "js Assinments",
    fullTime : true,
    __proto__: TeachingSupport,
};


Teacher.__proto__ = User;


// modern syntex

Object.setPrototypeOf(TeachingSupport, User);
Object.setPrototypeOf(TAsupport, TeachingSupport);


let anotherUser = "NareshGouttam     ";
String.prototype.truelength = function () {
    console.log(this);
    console.log(`true lenth is: ${this.trim().length}`); ;
};

anotherUser.truelength();

"hitesh".truelength();
"iceTea  ".truelength();