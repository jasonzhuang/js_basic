var msg = "*** Welcome to Dr. Clue's HTML/CGI Guide *** I hope you enjoy";

function scrollText(){
    var lchar;
    lchar = msg.substring(0,1);
    msg += lchar;
    msg = msg.substring(1, msg.length);
    var display = document.myForm.display;
    display.value = msg.substring(0,55);
    setTimeout(scrollText, 100);
};

