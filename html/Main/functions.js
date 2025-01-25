// output will be
// 10
// 100
// 1

document.getElementById("demo").innerHTML = "hello Functions";
var x = 1;
a();
b();
console.log(x);
function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}