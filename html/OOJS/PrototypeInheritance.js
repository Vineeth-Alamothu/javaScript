// prototypal inheritance

document.getElementById("demo").innerHTML = "prototype Inheritance";

// let Person = function (name, gender, birthYear){
//     this.name = name;
//     this.gender = gender;
//     this.birthYear = birthYear;

//     this.calcAge = function(){
//         let age = new Date().getFullYear() - this.birthYear;
//         console.log(age);
//     }
// }

// instantiation of different objects using function constructor
// john is an instance of the Person Object

// let john = new Person("John", "male", 1990);

// // INTERNAL WORKING 
// // let john = {}
// // this = john
// // john.name = "John";
// // john.gender = "male";
// // john.birthYear = 1990;
// // john.calcAge = f(){};
// // return this/john

// john.calcAge();
// console.log(john);


// let merry = new Person ("Merry", "female", 1995);
// console.log(merry);

// let steve = new Person ("Steve", "male", 1989);
// console.log(steve);

// In the above instances the calcAge method is copied for every instance this
// voilates the DRY (Do not repeat) Principle and wastes the memory storage.

// SOlution for the above issue is to create the single copy of the calcAge method
// and use it accross the code base

// -----------------------------------------

// the above can be achieved by prototype and inheritence
//---------------------------------------------------------------------
// 1. all the instances will have the access to the single copy of the calcAge method

// Inheritance is when one object is based on another object i.e. when one object
// gets access to the properties and methods of another object

// In JS we can implement inheritance using prototype

// every object in JS has a prototype property
// Inheritance in JS is achieved using this prototype property
// when we attach a prototype or a method to the prototype property of the object
// those properties and methods can be inherited by the instantiated object

let PersonInherit = function (name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

PersonInherit.prototype.calcAge =  function(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log(age);
}

let inheritP1 = new PersonInherit ("vineeth", "male", 1998);

console.log(inheritP1);