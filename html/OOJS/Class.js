document.getElementById("demo").innerHTML = "Classes in JS";

// Classes are introduced in JS in ES6

// What is a Class ?

// classes in JS allows us to create a blueprint and based on that, we can instantiate
// objects

// classes in JS allows us to do what we can do with constructor functions and prototypal inheritance using a nicer and more modern syntax

// classes in JS are different from traditional classes in other OOPs languages like C++ and java

// classes are a syntactical sugar of function constructors and prototypal inhertance.
// it is not a new concept.

// important points
// 1. classes can not be hoisted
// 2. like functions classes are also a first class citizens
    // that means we can pass a class as a function argument and we can return a class from a function
    // this is possible because classes are a syntactical sugar of a function constructor
// 3. classes are executed in strict mode


// Two ways to create a class
// 1. class declaration

class Person{
    constructor(name, gender, birthYear){
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;

        // this.calcAge way it will create a copy i every instance
        // this.calcAge = function() {
        //     console.log(new Date().getFullYear() - this.birthYear);
        // }
    }
    // calcAge goes and attaches into prototype
    calcAge(){
        console.log(new Date().getFullYear() - this.birthYear);
    }
}

// Person.prototype.calcAge = function() {
//     console.log(new Date().getFullYear() - this.birthYear);
// }

let John = new Person("vineeth", 'male', 1998);
console.log(John);

let Merry = new Person("Merry", 'Female', 1998);
console.log(Merry);

// 2. class expression

let PersonExpression = class {
    constructor(name, gender, birthYear){
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;

        // this.calcAge way it will create a copy i every instance
        // this.calcAge = function() {
        //     console.log(new Date().getFullYear() - this.birthYear);
        // }
    }
    // calcAge goes and attaches into prototype
    calcAge(){
        console.log(new Date().getFullYear() - this.birthYear);
    }
}