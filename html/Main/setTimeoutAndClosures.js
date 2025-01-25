document.getElementById("demo").innerHTML = "setTimeout and closures";
// please check calling one function at a time.
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("hello vineeth");
}
// x();

function y() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
    console.log("hello vineeth");
  }
}
// y(); // this will print 6, 6, 6, 6, 6 because of the closures it will be remembering the reference to the i but not the value in it and we are using a var.

function z() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
    console.log("hello vineeth");
  }
}
// z(); // this will print 1,2,3,4,5 because of let which is a block scope.

// the above function y to work like z we have do some changes
// the below will print 1,2,3,4,5 because we are providing a new reference to setTimeout by creating a closur using the close function.
// whenever the function is called there will be a new reference of x;
function a() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("hello vineeth");
}
a(); 
