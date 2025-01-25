document.getElementById("demo").innerHTML = "CLosures";

function z() {
  var b = 500;
  function x() {
    var a = 7;
    function y() {
      console.log(a,b);
    }
    y(); // returns a closure of y : contains function y along with it's lexical environment
  }
  x();
}
z();