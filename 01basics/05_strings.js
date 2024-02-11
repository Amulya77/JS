const name="bruce";
const greeting="Good Morning";

console.log(greeting + " " + name);

console.log(`Hello my name is ${name} and I am ${30} years old`);

const gameName0="Death Stranding";  //creating a string in java script
const gameName= new String("Death Stranding");  //creating a string object in java script
console.log(gameName0);
console.log(gameName);

console.log(gameName.length); //15
console.log(gameName[0]); //D
console.log(gameName.charAt(4));//h starting index from 0

console.log(gameName.indexOf("Stranding")); //6
console.log(gameName.lastIndexOf("n")); //12

console.log(gameName0[0]); //D

const newString= gameName.slice(0,5); //Death
const newString2= gameName.substring(6,15);//Stranding
//difference between slice and substring is that substring does not accept negative values while slice can take -ve values as well
console.log(newString) ;
console.log(newString2);

const string3 ="  Death Stranding    ";
console.log(string3.trim()); //Death Stranding
console.log(string3); //  Death Stranding

const url="https://www.google.com/amulya%20%kumar";

console.log(url.replace("%20%","-")); //https://www.google.com/amulya-kumar

console.log(url.split("/")); //["https:", "", "www.google.com", "amulya%20%kumar"]