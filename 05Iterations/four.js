const myObj={
    js:'javascript',
    php:'hypertext preprocessor',
    css:'cascading style sheets',
    rb:'ruby'
}

for (let key in myObj){
    console.log(key, myObj[key]);
}


const programmingLang=['javascript','php','ruby','python','java','c#','c++','c','swift','kotlin']
for (let index in programmingLang){
    console.log(index, programmingLang[index]);
}

//for of loop is used to iterate over an iterable object such as array or string or map or set or arguments object or any object that has a Symbol.iterator property
//for in loop is used to iterate over the enumerable properties of an object

//the main difference between for of and for in is that for in loop iterates over the properties of an object and for of loop iterates over the values of an iterable object only and not the properties of an object
//this means that for of loop cannot be used to iterate over the properties of an object
//example difference between for of and for in loops

const prog=['js','php','css','rb']
console.log('-----------for of loop');
for (let lang of prog){
    console.log(lang);
}
console.log('------------for in loop');
for (let lang in prog){
    console.log(lang);
}