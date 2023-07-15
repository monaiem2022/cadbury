
var body = document.getElementById('body');

var me = screen.availWidth;


body.onload = function () {
    if(me>769) {
       
        body.style.display = 'none';
       
    }  else {
        body.style.display = 'block'
    }
}


var ahmed = document.getElementById('ahmed');

var try1 = document.getElementById('try1');

var a = document.getElementById('a');

a.onclick = function () {

    try1.append(ahmed);
}