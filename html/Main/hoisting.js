
document.getElementById("demo").innerHTML = "Hoisting is here";

console.log(x);
let x = 7;

var getName = () => {
   let name = "Vineeth";
   console.log("your name: " + name);
}
let vineeth = setTimeout(getName,10000);

getName();
console.log(x);
// clearTimeout(vineeth);
