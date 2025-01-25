// inheritance betweeen function constructors in JS

document.getElementById("demo").innerHTML = "Inheritance between function constructors in JS";

// how to make one function constructor to inherit another function constructor properties
// use Person in Employee in order to follow DRY principles

let Person = function(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log('the age is ', age);
}

let john = new Person('John', 'Male', 1990);
console.log(john);

let Employee = function(name, gender, birthYear, EmployeeId, salary){
    // this.name = name;
    // this.gender = gender;
    // this.birthYear = birthYear;
    
    // in place of the above initialization we have to use Person
    Person(name, gender, birthYear);
    // the above will be pointing to the window object or the global scope as the above is just a normal function call
    // therefore the name, birthYear and gender will be present in window object
    
    // InOrder to get them into Employee we have to send the reference to the Person using call method
    Person.call(this, name, gender,birthYear);
    // still after this the prototype will be missing

    this.EmployeeId = EmployeeId;
    this.salary = salary;
}

// this will give the calcAge property to the Employee;
Employee.prototype = Person.prototype;

Employee.prototype.calSalary = function(){
    return this.salary * 12;
}

Employee.prototype.empDetails = function(){
    console.log(this.name);
    console.log(this.EmployeeId);
}

let emp = new Employee('Mark', 'male', 1995, 101, 12000);

console.log(emp);