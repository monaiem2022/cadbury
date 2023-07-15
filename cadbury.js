
var body = document.getElementById('body');

var me = screen.availWidth;


body.onload = function () {
    if(me>769) {
       
        body.style.display = 'none';
       
    }  else {
        body.style.display = 'block'
    }
}


var button = document.getElementById('button');

var try1 = document.getElementById('try1');

var a = document.getElementById('a');

button.onclick = function () {

    try1.append(a)
}