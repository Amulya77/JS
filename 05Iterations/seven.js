const myNumbers= [1,2,3,4,5,6,7,8,9,10];

const myNums= myNumbers.map((num)=>{
    return num*2;
})
console.log(myNums);//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

const newNums2= myNumbers
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=> num>40);
console.log(newNums2);//[ 41, 51, 61, 71, 81, 91, 101 ] 