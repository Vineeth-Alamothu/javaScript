document.getElementById("demo").innerHTML = "Callback functions";
// please go through the index.html file to uncomment the button code 

// what is a callback function in javascript?
// functions are first class citizens in JS - means you take a function and participate into another function as an argument
// the function that we pass as an argument is called as a callback function
// callback functions are very powerfull which gives us access to the whole asynchronous world in JS which is a synchronous and single threaded language.

setTimeout(function () {
  console.log("hello timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

// blocking the main thread -
// as we know JS have a single call stack/main thread everything will be executed inside the call stack only
// if any operation blocks the call stack then it is called as blocking the main thread
// always try to use async operations for not blocking the main thread

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("clicked", ++count);
  });
}

attachEventListeners();

// garbage collection and remove event Listeners
// attaching eventListeners are heavy it takes memory bcoz it forms a closure even the call stack is empty.
