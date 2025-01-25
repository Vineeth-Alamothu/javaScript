document.getElementById("demo").innerHTML = "Object.create method";

// prototypal inheritance can also be achieved by Object.create() method

// Object.create()

let Person = {
    calcAge(){
        return (new Date().getFullYear() - this.birthYear);
    },
    
    greet(){
        return "hello man";
    },

    // method for using init
    // not a constructor but works like a constructor
    init(name, gender, birthYear){
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
    }
}

// normal creation
let john = Object.create(Person);

console.log(john);

john.name = "vineeth";
john.birthYear = 1998;
john.gender = 'male';

console.log(john);

console.log(john.calcAge());

// sending properties object in Object.create()
let Merry = Object.create(Person, {
    name: {value: "Merry"},
    birthYear: {value: 1990},
    gender: {value: 'Female'}
})

console.log(Merry);
console.log(Merry.birthYear);

// using init method
let sunny = Object.create(Person);

sunny.init("sunny", 'male', 2000);

console.log(sunny);