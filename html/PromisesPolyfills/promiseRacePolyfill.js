document.getElementById("demo").innerHTML = "polyfill for Promise.race";

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 success");
  }, 40);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 reject");
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 success");
  }, 5000);
});

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("undefined is not iteerable"));
      return;
    }
    const n = promises.length;

    if (n === 0) {
      resolve();
      return;
    }

    promises.forEach(async (promise) => {
      return Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

Promise.myRace([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
