const MyElement = document.createElement('div');

MyElement.setAttribute('class', 'dcode');

document.body.appendChild(MyElement);

MyElement.style.width = "200px";
MyElement.style.height = "200px";
MyElement.style.backgroundColor = 'blue';

console.log(MyElement)