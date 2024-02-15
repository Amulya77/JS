//const tinderUser= new Object();      //This is object constructor //singleton object    
const tinderUser={}//This is object literal
//the difference between object constructor and object literal is that in object constructor we use new keyword to create an object and in object literal we use curly braces to create an object

tinderUser.id="123abc";
tinderUser.name="Rahul";
tinderUser.isLoggedIn=false;

//console.log(tinderUser);//{ id: '123abc', name: 'Rahul', isLoggedIn: false }

const regularUser={
    email:"sonam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sonam",
            lastname:"Joshi"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname);//Sonam
//dot notation is used to access the properties of an object

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2};//merging two objects into one using ES6 syntax
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const object4=Object.assign(obj1,obj2);//merging two objects into one using Object.assign() method 
const object4=Object.assign({},obj1,obj2);//merging two objects into one using Object.assign() method with empty object as the first argument
//this is because Object.assign() method modifies the first object and returns the modified object
console.log(object4)//{ '1': 'a', '2':b , '3': 'c', '4': 'd' }


const obj5={...obj1,...obj2};//merging two objects into one using spread operator
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users=[
    {
        id:1,
        name:"Rahul"
    },
    {
        id:2,
        name:"Sonam"
    },
    {

    }
]
users[3]={id:3,name:"Nishant"}; //adding new object to the array
console.log(users);//`[ { id: 1, name: 'Rahul' }, { id: 2, name: 'Sonam' }, { id: 3, name: 'Nishant' } ]`

users[1].name="Sonam Joshi";//updating the name of the second object in the array
console.log(users);//[ { id: 1, name: 'Rahul' }, { id: 2, name: 'Sonam Joshi' }, { id: 3, name: 'Nishant' } ]

console.log(Object.keys(users));//[ '0', '1', '2', '3' ]//returns the keys of the array

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]//returns the keys of the object
//the data type of the Object.keys() is an array

console.log(Object.values(tinderUser));//[ '123abc', 'Rahul', false ]//returns the values of the object
//the data type of the Object.values() is also an array

console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Rahul' ], [ 'isLoggedIn', false ] ]//returns the key-value pairs of the object

console.log(tinderUser.hasOwnProperty("id"));//true;checking whether "id" property exists or not






const course={
    name:"Javascript",
    price:100,
    courseInstructor:"Rahul"
}

course.courseInstructor="Sonam";//updating the value of the property

const { courseInstructor }=course;//destructuring the object and getting only the value of the property''
console.log(courseInstructor);//Sonam

//lets say courseInstructor is big name
const{courseInstructor:instructor}=course;//destructuring the object and getting only the value of the property and renaming it to insrtuctor
console.log(instructor);//Sonam


// {
//     "name":"Javascript",
//     "price":"free",
//     "courseInstructor":"Rahul"
// }

[
    {},
    {},
    {}

]
