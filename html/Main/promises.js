document.getElementById("demo").innerHTML = "promises";

// promises are used to handle asynchrous code in js;
//
const cart = ["shoes", "pants", "kurta"];
const nocart = [];

// code depending on the callback function and going to inversion of control
// here we pass a function as a callback to the createOrder api by blindly trusting it to execute
// Here the create order api would have executed the callback whenever it wants to do.

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId); // passing
// })

//----------------------------------------------------------------

// code with promises better than the above approach

// const promise = createOrder(cart);

// once the above line is executed the create order function will return a promise that will populate the
// object once the promise is fulfilled.
// here we are attaching the callback to the promise object.
// Here we will have the control with us.
// like the createOrder function will do only fill the promise object.
// And when the object is filled then only the function will be called definitely.

// promise.then(function (orderId) {
//   proceedToPayment(orderId); // attaching
// });

// the above code is called as "promise chaining"

// ----------------------------------------------------------------

// const GITHUB_API = 'https://dummyapi.online/api/movies';

// const user = fetch(GITHUB_API);

// console.log(user);

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (cart.length > 0) {
      setTimeout(function () {
        const orderId = Math.floor(Math.random() * 1000000);
        resolve(orderId);
      }, 2000);
    } else {
      reject("cart is empty");
    }
  });
}

function proceedToPayment(orderId,cart) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve(orderId,cart);
      console.log("payment completed")
    } else {
      reject("orderId is empty");
    }
  });
}

function showOrderSummary(orderId,cart) {
  return new Promise(function(resolve, reject) {
    resolve(function(orderId,cart){
      console.log(cart + "");
      console.log(cart);
    })
  })
}

createOrder(cart)
  .then(function(orderId){
    console.log(orderId)
    return orderId;
  })
  .then((orderId)=>
     proceedToPayment(orderId)
  )
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(function(){
    console.log("no maTTer what I WILL BE CALLED")
  });
