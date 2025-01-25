document.getElementById("demo").innerHTML = "ProtoType chanining";

let Person = function (name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person.prototype.city = "Ongole";

let vineeth = new Person ("vineeth", "male", 1998);
// vineeth -> instanceof Person
// Person -> instanceof Object;
// vineeth can access prototype of Object
// The above phenomenon is called as prototype chaining

console.log(vineeth); // shows city property but it is not it's own property let's check
console.log("should return false as city is not a property of vineeth", vineeth.hasOwnProperty('city')); // false
console.log("consoles Ongole",vineeth.city); // inherits from Person but not it's own property;



console.log("vineeth is accessing the prototype of Object", vineeth.hasOwnProperty("name")); // true
console.log("checking the prototype of Object is present in vineeth", vineeth.__proto__.__proto__ === Object.prototype); // true


let mark = {
    name:  'Mark',
    birthYear: 1928,
    gender: 'male'
}

// bts
// let mark = new Object(); - empty object
// mark.name = 'vineeth';
// mark.birthYear = 1998;
// mark.gender = 'male';

console.log("mark is an instance of Object",mark instanceof Object); // true 
// the above proves that the mark object inherits the Object costructor

console.log("proto of mark is equal to Object prototype", mark.__proto__ === Object.prototype); // true
// as it inherits the prototype of Object

console.log(Object.prototype)
// the Object have some properties like
// hasOwnProperty()
// isPrototypeOf()
// valueOf()
// toString()
// toLocaleString()
// therefore mark object also have all the properties of Object

console.log("return true if hasOwnProperty() is present in mark", mark.hasOwnProperty("name")) ; // true

// In JS a function is also a object.

// What is the importance of the prototype inheritance

let arr = [10,20,30,40];

// the arr is created from the new Arrray()
// therefore push, pop, at and many other properties are present in arr
// we can use these methods on arr due to prototype inheritance 
// Eg:
console.log(arr); // [10,20,30,40]
arr.push(50);
console.log(arr);// [10,20,30,40,50]
