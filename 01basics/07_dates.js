//Dates


let myDate= new Date(); 
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());

/*output of above
2024-02-11T11:25:10.431Z
Sun Feb 11 2024
16:55:10 GMT+0530 (India Standard Time)
11/2/2024 
*/

console.log(typeof myDate); //object
//we can access the date using getter methods

//getDay() returns a number between 0 and 6 representing the day of the week. 0 represents Sunday, 1 is Monday and so on till 6 which represents Saturday.


let mycreatedDate= new Date(2024,1,11);//year,month,date month date starts from 0 to 11 for Jan to Dec
console.log(mycreatedDate.toLocaleString());

let mycreatedDate2= new Date("02-11-2024");
console.log(mycreatedDate2.toLocaleString());


let myTimestamp= Date.now();
console.log(myTimestamp); //1644555470431

console.log(myDate.getTime()); //1644555470431


let newDate= new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);//0 to 11 Jan to Dec thats why adding 1
console.log(newDate.getDate());//1 to 31
console.log(newDate.getDay());//0 to 6 Sun to Sat


newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"Asia/Kolkata"
});
