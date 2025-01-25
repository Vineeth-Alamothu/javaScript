document.getElementById("demo").innerHTML = "Async Await";

// what is async ?
// what is await ?
// How async await works behind the scenes ?
// Examples of using async/await ;
// Error handling ;
// Interviews
// Async Await vs Promise.then /.catch ;

// ----------------------------------------------------------------
// async is a keyword used before a function to create a async function
// async function always returns a promise
// if the async function is returning a value then it always wraps the value in a promise and return the promise;

const p = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("promise resolved value"), 5000);
});

// async and await are used to handle promises;

// await is used only in a async function
// await will resolve the promise

// async function handlePromise() {
//     // when we use asyn await the JS engine will wait untill the promise is resolved;
//   const val = await p;
//   console.log(val);
//   console.log("hello vineeth");
// }
// handlePromise();


// function getData1(){
//     p.then((res) => console.log(res));
//     console.log("hello vineeth");
// }

// getData1();
const API_URL = "https://api.github.com/users/Vineeth-Alamothu"
async function handlePromise() {
    // when we use asyn await the JS engine will wait untill the promise is resolved;
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    console.log(jsonData);
}
handlePromise();