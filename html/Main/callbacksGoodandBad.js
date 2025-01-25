document.getElementById("demo").innerHTML = "callbacks good and bad";

// JS is a single threaded  and synchronous language
// we achieve asynchrous property using callbacks

console.log("hello world");

setTimeout(function () {
  console.log("JS");
}, 5000);

console.log("season2");

// 

const cart  = ["pants", "shoes", "kurta"];

// this below code is called as "callback hell" is creating dependency using callback on other callbacks
// this kind of code is unmaintainable and unreadable
// officially called as pyramid of doom in programming terminology

api.createOrder(cart, function (){
    api.proceedToPayment(function (){
        api.showOrderSummary(function (){
            api.updateWallet()
        });
    });
});


// inversion of control
// loosing control over the code because of these call backs
// the below code is an example of inversion of control
// api.proceedToPayment() is dependent on the execution of the createOrder api and api.createOrder is 
// responsible for calling the api.proceedToPayment() as it is sent as a callback function, we don't know 
// whether it will call the api.proceedToPayment method or not.

api.createOrder(cart, function (){
    api.proceedToPayment();
});