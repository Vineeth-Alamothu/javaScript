// polyfill for forEach Loop

document.getElementById("demo").innerHTML = "Polyfill for forEach loop";

var arr = [1,2,3,4,5];
arr.forEach((elem,index, self)=> {
    console.log(elem,index, self);
})

console.log("-----------------------------")

Array.prototype.myForEach = function(callback) {
    const arr = this;
    if(!callback){
        throw Error('undefined is not a function');
    }
    for(let i=0;i<arr.length ;i++){
        callback(arr[i], i, arr);
    }

}

arr.myForEach((ele, ind, self)=>{
    console.log(ele, ind, self);
})