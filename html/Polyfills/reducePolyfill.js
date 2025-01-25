// polyfill for reduce

document.getElementById("demo").innerHTML = "Polyfill for reduce";

let arr = [1,2,3,4];

// original
let ans = arr.reduce((accu, curr)=>{
    return accu+curr;
},0)

console.log(ans)

// polyfill 
Array.prototype.myReduce = function(callback, initialVal){
    if(typeof callback !== "function"){
        throw Error("undefined is not a function");
    }
    let arr = this;
    for(let i=0;i<arr.length;i++){
        let ans = callback(initialVal, arr[i], i, arr);
        initialVal = ans;
    }
    return initialVal;
}

let ans2 = arr.myReduce((acc,curr) => {
    return acc+curr;
},0);

console.log(ans2);