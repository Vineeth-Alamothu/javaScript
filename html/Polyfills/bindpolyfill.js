// polyfill for bind()

document.getElementById("demo").innerHTML = "Polyfill for bind";

// bind function works like call function but it returns a function rather than a value

class Person {
    constructor(name){
        this.name = name;
    }
}

let p1 = new Person("vineeth");

//original

function foo(age,city){
    console.log(`your name is ${this.name} of age ${age}, you live in  ${city}`);
}

// can send all the arguments in order in bind
let func = foo.bind(p1, 24, "ongole");
func();

// or we can send some of the params as arguments during function call
let func2 =  foo.bind(p1);
func2(23, "hyd");

//polyfill for the bind method
Function.prototype.myBind = function(context, ...args){

    if(typeof this !== "function"){
        throw Error(this + "is not a callable function");
    }

    context.refFunc = this;

    return function boundFunction(...otherArgs){
        context.refFunc(...args, ...otherArgs);
    }
}

// polyfill of bind using apply
Function.prototype.myBindImproved = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + " is not a callable function");
    }

    const func = this; // Reference to the original function

    return function boundFunction(...otherArgs) {
        // Combine the preset arguments with new arguments
        return func.apply(context || globalThis, [...args, ...otherArgs]);
    };
};

// polyfill of bind using call
Function.prototype.myBindImproved = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + " is not a callable function");
    }

    const func = this; // Reference to the original function

    return function boundFunction(...otherArgs) {
        // Combine preset arguments and new arguments
        context = context || globalThis; // Handle null or undefined context
        return func.call(context, ...args, ...otherArgs); // Use call instead of apply
    };
};



let func3 = foo.myBind(p1, 22, 'ongole');
func3();

let func4 = foo.myBind(p1);
func4(21, 'kgp');

