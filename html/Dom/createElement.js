document.getElementById('demo').innerHTML = "Create Element";
const newElement = document.createElement('div');

const Element = document.createElement('button');
Element.innerHTML = "HELLO";
document.body.appendChild(Element);

console.log(newElement);
console.dir(newElement);