document.getElementById("demo").innerHTML = "polyfill for promise.all"

const p1 = new Promise ((resolve, reject)=>{
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

Promise.myAll = function(promises){
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(promises)){
            throw new Error("promises is not iterable");
        }
    
        const n = promises.length;
        const results = [];

        if(n===0){
            resolve(results);
            return;
        }

        promises.forEach(async (promise, index)=>{
            try{
                let res = await promise;
                results[index] = res;

                if(index === n-1){
                    resolve(results);
                    return;
                }
            }
            catch(err) {
                reject(err);
                return;
            }
        })
    })
}

Promise.myAll([p1,p2,p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

Promise.all([p1,p3])
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })