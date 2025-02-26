document.getElementById('demo').innerHTML = "polyfill for Promise.any"

const p1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1 success');
    },4000)
})

const p2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        reject('p2 reject');
    },500)
})

const p3 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve('p3 success');
    },5000)
})

Promise.myAny = function(promises){
    return new Promise ((resolve, reject)=>{
        if(!Array.isArray(promises)){
            reject (new Error("not iterable"));
            return;
        }

        const n = promises.length;
        const errors = [];

        if(n===0){
            reject({
                message: new Error ('empty promises array'),
                errors
            })
        }

        promises.forEach(async (promise, index)=>{
            try{
                const res = await promise;
                resolve(res);
                return;
            }
            catch(err){
                errors[index] = err;
                if(index === n-1){
                    resolve({
                        message: new Error ('all promises got rejected'),
                        errors
                    })
                }
            }
        })

    })
}

Promise.myAny([p1,p2,p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

// Promise.any([p1,p2,p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })