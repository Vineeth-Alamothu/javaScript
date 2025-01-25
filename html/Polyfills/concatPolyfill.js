// polyfill for concat

document.getElementById('demo').innerHTML = 'concat method polyfill';

const a1 = [1,2];
const a2 = [3,4];
const a3 = [5,[6,7]];
const a4 = 12;
const a5 = 'foo';
const a6 = function(){};

console.log(a1.concat(a2,a3,a4,a5,a6,));

Array.prototype.myConcat = function(...args){
    let arr = this;
    for(let i=0;i<args.length;i++){
        if(Array.isArray(args[i])){
            arr = [...arr, ...args[i]];
        }
        else{
            arr.push(args[i]);
        }
    }
    return arr;
}

console.log(a1.myConcat(a2,a3,a4,a5,a6,));
