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

//json
(new Function("return " + data))()

//for <IE7
function createXHR() {
    if(typeof arguments.callee.activeXString != "string") {
        var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
        for (var i=0,len=versions.length;i<len;i++) {
            try{
                var xhr = new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                return xhr;
            } catch(ex) {
                
            }
        }
    }
    return new ActiveXObject(arguments.callee.activeXString);
}

/*
function nestObj(){
    var a = {outer:"hello"};
    a.b = {inner:"world"};
    console.log(a)// {outer="hello", b={}}
}*/
