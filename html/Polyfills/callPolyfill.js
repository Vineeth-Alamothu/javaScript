// polyfill for call()

document.getElementById("demo").innerHTML = "Polyfill for call";

class Person {
    constructor(name, gender){
        this.name = name;
        this.gender = gender
    }
}

let p1 = new Person('vineeth', 'male');
let p2 = new Person('Mohan', 'male');


console.log(typeof p1);

function foo(age){
    console.log(`hello ${this.name}, you are a ${this.gender} of age ${age}`);
}

// original
foo.call(p1, 25);

// polyfill

Function.prototype.myCall = function(context, ...args){
    // console.log("func this ",this);
    // console.log('context ',context);
    // console.log('...args',args);
    
    context.refFun = this;
    let result = context.refFun(...args);
    return result;
}

foo.myCall(p1, 355)

Function.prototype.myCallImproved = function(context, ...args){
    // console.log("func this ",this);
    // console.log('context ',context);
    // console.log('...args',args);
    context = context || globalThis;
    const uniqueKey = Symbol("refFunc");
    context[uniqueKey] = this;
    // console.log(context);

    const result = context[uniqueKey](...args);
    delete context[uniqueKey];
    return result;
}

foo.myCallImproved(p1, 30)