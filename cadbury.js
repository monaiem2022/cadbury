
// var body = document.getElementById('body');

// var me = screen.availWidth;


// body.onload = function () {
//     if(me>769) {
       
//         body.style.display = 'none';
       
//     }  else {
//         body.style.display = 'block'
//     }
// }




function sendToWhatsApp() {
    const imageURL = document.getElementById("image").src;
    const text = "This is the text to send to WhatsApp";
  
    // Copy the image to the clipboard
    navigator.clipboard.writeText(imageURL);
  
    // Open WhatsApp with the text and image
    const whatsappURL = "whatsapp://send?text=" + encodeURIComponent(text) + "&image=" + encodeURIComponent(imageURL);
    window.open(whatsappURL);
  }