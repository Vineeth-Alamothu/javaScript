document.getElementById("demo").innerHTML = "first class function";


// Function Statement aka Function Declaration 
function a() {
    console.log("a called");
}
a();

// Function expression
var b = function () {
    console.log("b initialised with a function is called function expression");
}
b();

// Anonymous function
// Function without a name is called a anonymous function
// these are used in a place where the function is used as values
var c = function () {
    console.log("c initialised with a function without name is called anonymous function");
};

// Named Function Expression
// try calling xyz()

var d = function xyz() {
    console.log("d initialised with a function with name is called Named Function Expression");
}

// difference between Parameter and Arguments ?
// parameters are the local identifiers or labels of the function that we create during the initialization
// Arguments are the values that we sent to the function while calling the function.


// First class functions
// First class Citizens
// the ability to use functions as values to pass them as arguments to another function is called as first class functions
function f(param1) {
    return param1;
}
function prm(){
    console.log("hello");
}
console.log(f(prm));

