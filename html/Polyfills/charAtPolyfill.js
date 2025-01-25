// polyfill for charAt

document.getElementById('demo').innerHTML = 'charAt polyfill';

let str = "vineeth";

let a = str.charAt(10);

console.log(a);

String.prototype.mycharAt = function(position){
    const string = this;

    if(position < 0 || position > string.length){
        return '';
    }else{
        return string[position];
    }
}

let b = str.mycharAt(10);
console.log(b);