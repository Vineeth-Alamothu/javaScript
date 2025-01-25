document.getElementById("demo").innerHTML = "Promise Api's and interview questions";

// promise.all() // fail fast technique
// it is used to handle multiple promises together;
// it takes an array of promises as input;
// it will make all the parallel api calls;
// the final result will be coming after all the promises are resolved
// and the final result array will be returned;

// if any of the promises is rejected the promise.all() will throw an error as soon as any of the promise is rejected;

// it will give all or none of the promises ;
// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("p1 success"), 1000);
//     // setTimeout(() => reject("p2 fail"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("p3 success"), 2000);
//     // setTimeout(() => reject("p3 Fail"), 2000);
// });

// Promise.all([p1,p2,p3]).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err);
// })

//----------------------------------------------------------------

// promise.allSettled();
// this is used to handle multiple promises even though any of the promises is rejected then also it will wait for all 
// the promises to settle and then return all the promises along with the error message in the same order;

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     // setTimeout(() => resolve("p2 success"), 1000);
//     setTimeout(() => reject("p2 fail"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//         // setTimeout(() => resolve("p3 success"), 2000);
//     setTimeout(() => reject("p3 Fail"), 2000);
// });

// Promise.allSettled([p1,p2,p3]).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err);
// })

//----------------------------------------------------------------

// promise.race() // result will the the response of the first settled promise either success or failure;
// this is used to handle multiple promises calls but returns the value of the first settled (success or failure) promise 
// other than the array of promises resolved as above;
// whatever promise is settled first it will be returned;
// if any of the promise fails it will return the error;

const p1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise(function(resolve, reject) {
    // setTimeout(() => resolve("p1 success"), 5000);
    setTimeout(() => reject("p2 fail"), 1000);
});

const p3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("p3 success"), 2000);
    // setTimeout(() => reject("p3 Fail"), 2000);
});

Promise.race([p1,p2,p3]).then(res => {
    console.log(res);
})
.catch(err => {
    console.error(err);
});

//--------------------------------------------------------------------

// promise.any() // seeking for first success api 
// it's alike promise.race() but returns the value of the first settled success promise
// will wait for the first successful promise **
// if everything fails it will return the aggregated error message
// which is an array of all error messages;

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("p1 fail"), 3000);
//     // setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("p1 success"), 5000);
//     // setTimeout(() => reject("p2 fail"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     // setTimeout(() => resolve("p3 success"), 2000);
//     setTimeout(() => reject("p3 Fail"), 3000);
// });

// Promise.any([p1,p2,p3]).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err);
//     console.log(err.errors);
// })
