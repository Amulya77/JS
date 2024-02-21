//for
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log(' 5 is best number');
//     }
//     console.log(element);
// }

//print tables from 1 to 10 using for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

//break and continue
for (let i = 0; i < 10; i++) {
    if(i==5){
        continue;
    }
    console.log(i);
}
console.log("Outside the loop");

for (let i = 0; i < 20; i++) {
    if(i==5){
        break;
    }
    console.log(i);
}
console.log("Outside the loop");