// polyfill for map

document.getElementById("demo").innerHTML = "Polyfill for map";

var arr = [1,2,3,4,5];

let ans = arr.map((elem)=>{
    return elem*2;
})

console.log(ans);

Array.prototype.myMap = function(callback){
    if(!callback){
        throw Error('undefined is not a function');
    }
    const newArr = [];
    const arr = this;
    for(let i=0;i<arr.length;i++){
        const result = callback(arr[i], i, arr);
        newArr.push(result);
    }
    return newArr;
}

let ans2 = arr.myMap((elem)=>{
    return elem*2;
})
console.log(ans2);