document.getElementById("demo").innerHTML = "Abstraction in JS";

class Circle{
    radius;
    pi;

    constructor(radius = 0){
        this.radius = radius;
        this.pi = 3.14;
    }

    getArea(){
        return this.pi * Math.pow(this.radius, 2);
    }

    getPerimeter(){
        return 2 * this.pi * this.radius;
    }
}

const circle = new Circle(5);
console.log("Area of the circle is ", circle.getArea().toFixed(2));
console.log("Perimeter of the circle is ", circle.getPerimeter().toFixed(2));