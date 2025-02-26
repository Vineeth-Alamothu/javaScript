document.getElementById('demo').innerHTML = "polyfill for Promise.allSettled"

const p1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1 success');
    },500)
})

const p2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        reject('p2 reject');
    },500)
})

const p3 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve('p3 success');
    },500)
})

Promise.myAllSettled = function(promises){
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(promises)){
            throw Error("not iterable");
        }

        const n = promises.length;
        const results = [];
        if(n==0){
            resolve(results);
            return;
        }

        promises.forEach(async (promise, index)=>{
            try{
                const res = await promise;
                results[index] = {status: "fulfilled", value: res};
                if(index == n-1){
                    resolve(results);
                    return;
                }
            }
            catch(err){
                results[index] = {status: "rejected", value: err};
                if(index == n-1){
                    resolve(results);
                    return;
                }
            }
        })

    })
}

Promise.myAllSettled([p1,p2,p3])
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })

// Promise.allSettled([p1,p2,p3])
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err);
//     })