/**
 * equals with 
 * setInterval(function(){
 *  doStuff(); 
 * },1000)
 */

(function(){
  doStuff();
  setTimeout(arguments.callee, 1000); 
})();

function doStuff(){
    console.log("do stuff...");
}


getScript("http://www.cornify.com/js/cornify.js",function(){
    var times = [42, 28, 75, 50];
        times = times[Math.floor(Math.random()*times.length)];
    
    while(--times) {
        cornify_add();
    }
})


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


