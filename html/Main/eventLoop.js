document.getElementById("demo").innerHTML = "event loop";

console.log("start");

// the callback function inside the setTimeout function is pushed into the callback queue
// then when the time expires the event loop will push the contents of the callback queue to the 
// call stack for execution.
setTimeout(function ab() {
  console.log("hello timer");
}, 5000);

document.getElementById("btn").addEventListener("click",function cb() {
    console.log("callback");
});


// incase of the fetch function the microtask queue is used other than the callback queue
// MicroTask Queue have higher priority of execution than that of the callback queue.
// all the call back functions that come through promises and Mutation observer will be pushed into the microtask queue.
// mutation observer will always check whether there is a change in the dom tree.  
fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB netflix");
});


console.log("end");


// starvation of callback queue please read about it.


