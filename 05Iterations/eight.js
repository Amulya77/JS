const myNums=[1,2,3]

const myTotal=myNums.reduce((accumulator,currentval)=>{
    console.log(`accumulator is ${accumulator} and currentval is ${currentval}`)
    return accumulator+currentval;
},0)
console.log(myTotal) // 6

const myTotal2=myNums.reduce((accumulator,currentval)=>accumulator+currentval,0)
console.log(myTotal2) // 6

const shoppingcart=[
    {
        product:"shirt",
        price:20
    },
    {
        product:"pants",
        price:30
    },
    {
        product:"shoes",
        price:50
    }
]

// const total=shoppingcart.reduce((acc,curr)=>{
//     return acc+curr.price;
// },0)

const total=shoppingcart.reduce((acc,curr)=>acc+curr.price,0)
console.log(total)//100