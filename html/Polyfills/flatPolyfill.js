// polyfill for flat method

document.getElementById('demo').innerHTML = "flat method pollyfill";

let arr = [1,2,3,4,[5,6,7,[8,9]]];

let ans = arr.flat()
console.log(ans);

// flat polyfill using recursion

Array.prototype.myFLat = function(){
    const arr = this;
    const res = [];

    function flat(arr){
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                flat(arr[i]);
            }else{
                res.push(arr[i]);
            }
        }
    }
    flat(arr);
    return res;
}

console.log( arr.myFLat());

// flat polyfill using iterative approach

Array.prototype.myFLatIte = function(){
    const stack = [...this];
    const res = [];
    while(stack.length){
       let elem = stack.pop(); 
       if(Array.isArray(elem)){
            stack.push(...elem);
       }else{
        res.push(elem);
       }
    }
    return res.reverse();
}

console.log(arr.myFLatIte())