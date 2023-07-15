
var body = document.getElementById('body');

var me = screen.availWidth;


body.onload = function () {
    if(me>769) {
       
        body.style.display = 'none';
       
    }  else {
        body.style.display = 'block'
    }
}