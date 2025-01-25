document.getElementById("demo").innerHTML = "call apply and bind";
// call

let name1 = {
    firstname: "vineeth",
    lastname: "alamothu",
   
}

let printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " from "+ hometown + "," + state);
}

let name2 = {
    firstname: "sneha",
    lastname: "alamothu"
}

// function borrowing using call method.

printFullName.call(name1, "Ongole", "AP"); // comma separated arguments

// apply method
// the only difference b/w call and apply is the way we pass arguments to the function;
// in this we pass the arguments as an array;

printFullName.apply(name2, ["Ongole", "AP"]); // arguments as a array list

// bind method will gives us a copy of method which can be invoked later;
// this works like same call method.
// But the only difference is instead of calling directly the function the bind method binds the method with the object
// and returns us the copy of that method

let printMyName = printFullName.bind(name1, "Ongole", "AP");

printMyName();