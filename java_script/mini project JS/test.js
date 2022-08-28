document.write("hello");
console.log('HELLO');
let wrap1=document.getElementById('wrap');
let button = document.createElement('button')
button.innerText='Click';
wrap1.appendChild(button);
button.onclick = function f() {
    console.log('Click')
    // window.location.href='test2.html';
    window.open('test2.html')
}