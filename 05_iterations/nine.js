const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function(acc, curr){
//     console.log(`acc : ${acc} curr ${curr}`)
//     return acc + curr
// }, 0)

// const mytotal = myNums.reduce((acc, curr) => acc + curr ,0)
// console.log(mytotal)


const shoppingCart = [
    {
        itemName : "js",
        Price : 2999
    },
    {
        itemName : "Python",
        Price : 699
    },
    {
        itemName : "Android Dev",
        Price : 5999
    },
    {
        itemName : "Data Scientist",
        Price : 12999
    },
]

const finalPrice = shoppingCart.reduce((acc , item) => acc + item.Price, 0)

console.log(finalPrice)