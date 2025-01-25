// polyfill for apply()

document.getElementById("demo").innerHTML = "Polyfill for apply";


class Person {
    constructor(name){
        this.name = name;
    }
}

let p1 = new Person('vineeth');

console.log(p1);

function foo(age,city){
    console.log(`hello ${this.name}, your age is ${age} and lives in ${city}`);
}

foo.apply(p1, [28, 'ongole']);

// polyfill
Function.prototype.myApply = function(context, args){
    if(typeof this !== 'function'){
        throw Error(this + ' is not a callable function');
    }

    context.refFunc = this;
    context.refFunc(...args);
}

// polyfill improved version
Function.prototype.myApplyImproved = function(context, args){
    if(typeof this !== 'function'){
        throw Error(this + ' is not a callable function');
    }

    context = context || globalThis;
    const uniqueKey = Symbol('refFunc');
    context[uniqueKey] = this;
    const result = context[uniqueKey](...args);
    delete context[uniqueKey];
    return result;
}

foo.myApply(p1, [28, 'hyderabad']);
foo.myApplyImproved(p1, [28, 'bangalore']);
