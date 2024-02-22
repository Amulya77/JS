const coding= ["js", "php", "css", "rb"];

coding.forEach( function (val){
    console.log(val);
})//js, php, css, rb
//the forEach method is used to iterate over an array and it takes a callback function as an argument
//the callback function takes three arguments: the current value, the index of the current value and the array itself
console.log('-----------------');
coding.forEach((item)=>{console.log(item)})//js, php, css, rb

console.log('-----------------');
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);//js, php, css, rb

console.log('-----------------');
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})//js 0 [ 'js', 'php', 'css', 'rb' ] php 1 [ 'js', 'php', 'css', 'rb' ] css 2 [ 'js', 'php', 'css', 'rb' ] rb 3 [ 'js', 'php', 'css', 'rb' ]

console.log('-----------------');

const myCoding=[
    {
        languageName:"javascript",
        languageFilename:"js"
    },
    {
        languageName:"php",
        languageFilename:"php"
    },
    {
        languageName:"css",
        languageFilename:"css"
    },
    
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})