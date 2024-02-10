let score = '100';
let score2 = "AMUl100";
let score3 = null;

console.log(typeof(score)); //string
console.log(score + 1); //1001
console.log('Score: ' + score); // Score: 100

let valueInNumber=Number(score);
let valueInNumber2=Number(score2);
console.log(typeof(valueInNumber))//number
console.log(valueInNumber2);//NAN
console.log(score3); //null

//"33"= 33 string
//33= 33 number
//"33abc"= NaN
//true= 1 false= 0
//NaN= not a number
//null= empty value
//undefined= variable declared but not assigned any value
//0= number
//''= empty string
//false= boolean
//{}= object
//[] = array
//function(){}= function

//1=true
//0=false
//""=false
//"Amulya"=true
//null=false
//undefined=false
//{}=true
//[]=true
//function(){}=true


//************************operations***************


let value1=100;
let negvalue1=-value1
console.log(negvalue1) // -100

console.log(2+2) //4
console.log(2-2) //0
console.log(2*2) //4
console.log(2/2) //1
console.log(2%2) //0
console.log(2**2) //4

let str1="Amulya";
let str2="Bhagat";
let str3=str1+str2;
console.log(str3); //AmulyaBhagat

/************************** */

console.log("1"+2);//12
console.log(1+"2");//12
console.log(1+2);  //3
console.log("1"+2+2);//122
console.log(1+2+"2");//32