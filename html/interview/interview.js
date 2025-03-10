function retryLogic(url, retryCount, delay) {
    console.log(retryCount);
  const response = fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      if (retryCount) {
        setTimeout(function () {
          retryLogic(url, retryCount-1, delay);
        }, delay);
      } else {
        throw err;
      }
    });
}

let count = 5;

retryLogic("https://random-flat-colors.vercel.app/api/random?count=5", count, 1000);
// retryLogic("https://random-flat-colors.vercel.app/api/andom?count=5", count, 1000);
