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

/**
 * short name
 */
jQuery.props = {
    "for":"htmlFor",
    "class":"className",
    maxlength:"maxLength",
    tabindex:"tabIndex"
}

getScript("http://www.cornify.com/js/cornify.js",function(){
    var times = [42, 28, 75, 50];
        times = times[Math.floor(Math.random()*times.length)];
    
    while(--times) {
        cornify_add();
    }
})

(new Function("return " + data))()

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


// release memory
assert = function( fn ) {
    var div = document.createElement("div");

    try {
        return fn( div );
    } catch (e) {
        return false;
    } finally {
        // release memory in IE
        div = null;
    }
}

assertTagNameNoComments = assert(function( div ) {
    div.appendChild( document.createComment("") );
    return !div.getElementsByTagName("*").length;
})

