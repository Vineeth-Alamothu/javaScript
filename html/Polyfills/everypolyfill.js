// polyfill for every

// every function works like every element should pass the given condition then it returns true else false


document.getElementById("demo").innerHTML = "Polyfill for every";

let arr = [-2,-1,0,3,5,6];
let arr2 = [1,2,3,4,5,6];

// original every() function implementation

let ans = arr.every((elem) => {
    return elem>0;
})

// let ans = arr2.every((elem) => {
//     return elem>0;
// })

console.log(ans);

// polyfill for every

Array.prototype.myEvery = function(callback) {
    if(typeof callback !== "function"){
        throw Error('undefined callback function');
    }

    const arr = this;

    for(let i=0;i<arr.length;i++){
        let res = callback(arr[i], i, arr);
        if(!res){
            return false;
        }
    }
    return true;
}

// let ans2 = arr.myEvery((elem)=>{
//     return elem>0;
// })

let ans2 = arr2.myEvery((elem)=>{
    return elem>0;
})

console.log(ans2);