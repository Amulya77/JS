const marvel_heros=['Ironman','Spiderman','Thor'];
const dc_heros=['Batman','Superman','Wonder Woman'];

marvel_heros.push(dc_heros);
console.log("Pushed the dc_heros array as an element to the marvel_heros")
console.log(marvel_heros);//[ 'Ironman', 'Spiderman', 'Thor', [ 'Batman', 'Superman', 'Wonder Woman' ] ]

console.log(marvel_heros[3]);//[ 'Batman', 'Superman', 'Wonder Woman'] 
console.log(marvel_heros[3][0]);//Batman

const marvel_heros2=['Ironman','Spiderman','Thor']; 
const dc_heros2=['Batman','Superman','Wonder Woman'];

const all_heros=marvel_heros2.concat(dc_heros2);

console.log("All Heros",all_heros);//[ 'Ironman', 'Spiderman', 'Thor', 'Batman', 'Superman', 'Wonder Woman' ]

//so when we push something into an array, it becomes a nested array if the thing being pushed is also an array.
//and when we use the concat method, it does not change the original array but returns a new array containing the elements of the original array and the array being concatenated.

//so the push function is used to add elements to the end of an array and the concat function is used to concatenate two arrays and return a new array containing the elements of both arrays.
//JS arrays can hold multiple data types and are dynamic in nature. 
//They have properties like length which gives the number of elements present in an array, they support methods like  push, pop, unshift, shift, indexOf, includes, join, slice, splice, concat, etc.

const all_new_heros= [...marvel_heros2,...dc_heros2];

console.log("All New Heros",all_new_heros);//[ 'Ironman', 'Spiderman', 'Thor', 'Batman', 'Superman', 'Wonder  Woman' ]console.log('New way of adding elements using spread operator ',all_new_heros)


//flat method is used to flatten an array of arrays into a single array. It removes any nested arrays that exist within the parent array.

const another_array=[1,2,3,[4,5,6,[7,8,9]]]; //nested array is called a multidimensional array or nested array
const real_another_array=another_array.flat(Infinity);

console.log("Real Another Array",real_another_array);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]





console.log(Array.isArray("AMULYA"));//false
console.log(Array.from("AMULYA"));//[ 'A', 'M', 'U', 'L', 'Y', 'A' ]
//from method is used to convert an array-like or iterable object to an array. 
//It creates a new array from elements of an array-like or iterable object. The result is an array with the same elements as the iterable object.

console.log(Array.from({name:"Amulya",age:21}));//[]  <-- because it is not array like object


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
//The of() static method creates a new array instance from a variable number of arguments, regardless of number or type of the arguments.
