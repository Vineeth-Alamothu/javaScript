// polyfill for some

// some function works like atleast one element should pass the given condition then it returns true


document.getElementById("demo").innerHTML = "Polyfill for some";

let arr = [-2,-1,0,3,5,6];

// original some function implementation

let ans = arr.some((elem)=>{
    return elem>5;
})

console.log(ans);

// polyfill implementation

Array.prototype.mySome = function(callback){
    if(typeof callback !== 'function'){
        throw Error ("callback passed is not a function");
    }
    const arr = this;
    for(let i=0;i<arr.length;i++){
        const ans = callback(arr[i], i, arr);
        if(ans){
            return true;
        }
    }
    return false;
}

let ans2 = arr.mySome((elem)=>{
    return elem>8;
})

console.log(ans2);