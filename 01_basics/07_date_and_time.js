// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());


// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2024-01-25");
// let myCreatedDate = new Date("05-02-2002");
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);
console.log(newDate.toLocaleString("default",{
    weekday:"long",
})
)