// Inheritance between classes

document.getElementById("demo").innerHTML = "Inheritance between classes";

// classes are just a syntactical sugar of function constructors

// parent class
class Person{
    constructor(name, gender, birthYear){
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(new Date().getFullYear() - this.birthYear);
    }
}

// child class
class Employee extends Person{
    constructor(name, gender, birthYear, salary, EmployeeId){
        // call the constructor of the base class using super
        super(name, gender, birthYear)

        this.salary = salary;
        this.EmployeeId = EmployeeId;
    }
    calSalary(){
        console.log(this.salary * 12);
    }
}

let vineeth = new Employee("vineeth", "gender", 1990, 2000, 123);

console.log(vineeth.calcAge());