// Liskov Substitution Principle

// A class should be substitutable by its subclasses without changing the behavior of the program

class Bird {
    fly() {
        console.log("Flying");
    }
}

class Duck extends Bird {
    fly() {
        console.log("Duck is flying");
    }
}

class Penguin extends Bird {
    fly() {
        console.log("Penguin is not flying");
    }
}

const bird = new Bird();
const duck = new Duck();
const penguin = new Penguin();

bird.fly();
duck.fly();
penguin.fly(); 