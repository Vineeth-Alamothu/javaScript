document.getElementById("demo").innerHTML = "Block Scope and shadowing in js";
// var keyword
var x = 1000;
{
  // Compound Statements/Block
  var x = 10; // shadowing
  console.log(x); // 10
}
console.log(x); // 10 because the shadowed variable changes the value of the original variable as var is global scoped.

// let and const

let a = 1000;
{
  // Compound Statements/Block
  let a = 20; // shadowing
  console.log(a); // 20
}
console.log(a); // 1000 shadowed variable doesn't change the value of the original variable as let and const are block scoped.

var p = 1000;
{
  let p = 20; // illegal shadowing
  console.log(p); // 20
}
// let with var shadowing will throw a error
// SyntaxError: Identifier 'p' has already been declared
