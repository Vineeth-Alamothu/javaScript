document.getElementById("demo").innerHTML = "Higher Order Functions";

// A function which takes another function as an argument or returns another function is called
// a higher order function.
// 

function x() {
    console.log("vineeth");
}

// HOF
function y(x) {
    x();
}

// eg:

const radius = [3,1,2,4];

// const calculateArea = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }

// console.log(calculateCircumference(radius));

// const calculateDia = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }

// console.log(calculateDia(radius));

// generic function for above code HOC

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const dia = function (radius) {
    return 2 * radius;
};

const calculate = function(arr,logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

// prototype for above code
Array.prototype.calculateproto = function(logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculateproto(area));

console.log(calculate(radius, area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius, dia));