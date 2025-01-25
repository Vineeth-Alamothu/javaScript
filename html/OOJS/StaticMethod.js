// Static Method in JS

document.getElementById("demo").innerHTML = "Static Method";

// How to create a static method for both function constructor and a class

// Static Method : A method which can be called directly on the classes and not on the instance is called a static method
// Instance Method : A method which can be called on the instance of a class is called a instance method

// classes static method
class Person {
    constructor(name, gender, birthYear) {
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
    }

    // instance method
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    }

    // static method
    static greet(){
        console.log("hello man How are you ?")
    }
}

let Mark = new Person("Mark", "male", 1998);

// calcAge can be seen in prototype but greet is not seen
console.log(Mark);

// let's try to access greet in Mark
// Mark.greet(); // gives an error
Person.greet(); // logs "hello man How are you ?"


// function constructor static method
let PersonFunc = function(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

// instance method
PersonFunc.prototype.calcAge = function(){
    console.log(new Date().getFullYear() - this.birthYear);
}

// Static method in function constructor
PersonFunc.greet = function(){
    console.log("Hello man How are you ?")
}

let vineeth = new PersonFunc('vineeth', 'male', 1990);

// calcAge can be seen in prototype but greet is not seen
console.log(vineeth);

// let's try to access greet in vineeth
// vineeth.greet(); // gives an error

PersonFunc.greet();


// exaples of builtin static Methods are
Number.parseInt()
Number.isNaN()
Array.from()