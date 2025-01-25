// Setters and Getters

document.getElementById("demo").innerHTML = "getters and setters";

// There are two types of properties in JS
// 1. Data Properties
// 2. Accessor Properties

// getters and setters comes under Accessor Properties
// Accessor properties are methods that gets or sets the value of an object

// Accessor Properties
// -------------------
// 1. getter properties - read objects properties - get (keyword)
// 2. setter properties - set an objects property value - set (keyword)

// Encapsulation - we will hide the data from the outside world
// so we can't access these properties directly so we are creating getters and setters
// should not access like John.name, John.birthYear, John.annualSalary
// so once the above properties are hidden from the outside world we use accessor properties
// to access them.

// we use getter and setter method to return some calculated value please follow the code snippet below

// using ojects
let John = {
    name: 'vineeth',
    birthYear: 1998,
    annualSalary: 12000,

    get getName(){
        return'Mr. '+this.name;
    },
    
    set setName(val){
        if(val.length < 4){
            alert("name is too short")
        }
        else{
            this.name = val;
        }
    }
}

console.log(John.getName);

John.setName = "John Snow" ;

console.log(John.getName);


// using class

let User = class{
    constructor(name, password, role){
        this.name = name;
        this.password = password;
        this.role = role;
    }

    set setPassword(val){
        if(val.length < 4){
            alert('pass should be morethan 4 chars');
        }else{
            this.password = val;
        }
    }
}

let Mark = new User('Mark', 'pwd123', 'admin');

console.log(Mark);

Mark.setPassword = 'abcd';

console.log(Mark);