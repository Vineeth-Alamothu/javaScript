document.getElementById("demo").innerHTML = "Scope and Lexical Environments";

function a() {
  var b = 7;
  c();
  function c() {
    console.log(b);
  }
}

a();
