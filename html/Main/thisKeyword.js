"use strict";

document.getElementById("demo").innerHTML = "this key word";

// this in global space

console.log(this);

// this inside a function

function a(){
    console.log(this); // non strict : this will give global Object
                       // "use strict" : this will give undefined 
}
a();

// the above phenomenon is called this substitution
// if the the value of the this keyword is undefined or null
// this keyword will be replaced by global object only in non-strict mode;

function b(){
    console.log(this);
}
b(); // this is undefined due to strict mode
window.b(); // this will give the global object or window object

// this inside objects methods

const obj = {
    name: "vineeth",
    age: 25,
    print: function(){
        console.log(this);
    }
}

// obj.print();

// this in arrow function

const obj1 = {
    name: "vineeth",
    age: 25,
    print: () => {
        console.log(this);
    }
}   

const obj2 = {
    name: "vineeth",
    age: 25,
    print: function(){
        const y = () => console.log(this);
        y();
    }
}

// arrow function don't have it's own this so instead it takes the enclosed lexical context 
// in which it is present;

obj2.print();