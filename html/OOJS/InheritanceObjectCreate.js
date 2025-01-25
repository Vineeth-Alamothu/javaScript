// inheritance using Object.create()

document.getElementById("demo").innerHTML = "inheritance using Object.create()";

let Person = {
    calcAge(){
        return new Date().getFullYear() - this.birthYear;
    },

    PersonInit(name, gender, birthYear){
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
    }
}

let employee = Object.create(Person);

employee.employeeInit = function(name, gender, birthYear, empId, salary){
    // this.name = name;
    // this.gender = gender;
    // this.birthYear = birthYear;

    // instead of doing the above we can call the personInit method on employee
    employee.PersonInit.call(this, name, gender, birthYear)

    this.empId = empId;
    this.salary = salary;
}

console.log(employee);

let Mark = Object.create(employee);
Mark.employeeInit('Mark', 1990, "male", 301, 24000);

console.log(Mark);