document.getElementById("demo").innerHTML = "closure Interview questions";

function outer() {
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer()();


class Counter {
    constructor() {
        var count = 0;
        this.incrememntCounter = function () {
            count++;
            console.log(count);
        };
        this.decrementCounter = function () {
            count--;
            console.log(count);
        };
        this.resetCounter = function () {
            count = 0;
            console.log(count);
        };
    }
}

var counter1 = new Counter();

counter1.incrememntCounter();
counter1.incrememntCounter();
counter1.incrememntCounter();
counter1.incrememntCounter();
counter1.decrementCounter();
counter1.resetCounter();
counter1.decrementCounter();
