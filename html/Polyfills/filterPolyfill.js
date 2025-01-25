// polyfill for filter

document.getElementById("demo").innerHTML = "Polyfill for filter";

let arr = [1, 2, 3, 4, 5, 6];

// original 
let ans = arr.filter((val) => {
  return val>2;
});

console.log(ans);

// polyfill 
Array.prototype.myFilter = function(callback){
    if(!callback){
        throw Error('undefines callback');
    }

    const arr = this;
    const ans = [];
    for(let i=0;i<arr.length;i++){
        const result = callback(arr[i], i, arr);
        if(result){
            ans.push(arr[i]);
        }
    }
    return ans;
}

let ans2 = arr.myFilter((val,ind,arr)=>{
    return val>3;
})
console.log(ans2);