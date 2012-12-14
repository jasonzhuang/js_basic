(function runAll(){
    //case4()
    //case5();
    case6();
})();

//RegEx.match()
function case1(){
    var text = "hahahhaluckyCount=2";
    var pattern = /luckyCount=(\d{1})/g;
    var matches = pattern.exec(text);
    console.log(matches);
    console.log("luckyCount: " + RegExp.$1);
}

//RegEx.test(), $n store capture match
function case2(){
    var text = "cat, bat, sat, fat";
    var pattern = /.at/g;
    
    var matches = pattern.exec(text);
    console.log(RegExp.lastMatch);
    
    text = "this has been a short summer";
    pattern = /(..)or(.)/g;
    
    if(pattern.test(text)) {
        console.log(RegExp.$1);
        console.log(RegExp.$2);
    } 
}

//trim white space
function case3(){
    var text="  hello word  JS  ";
    console.log("before trim length: " + text.length);
    var pattern = /^\s+|\s+$/g;
    var result = text.replace(pattern, '');
    console.log("after trim length: " + result.length);
}

// (?:pattern) doesn't capture match
function case4() {
    var pattern = /(some)/;
    var pattern2 = /(?:some)/;
    var text = "something";
    var matches = pattern.exec(text);
    var matches2 = pattern2.exec(text);    console.log(matches);
    console.log(matches2);
}


// (?=pattern) matches only if there is a following pattern in input.
function case5() {
    var text = "hello winYEP98";
    var pattern = /win(?=98)/;
    var matches = pattern.exec(text);
    console.log(matches);//null
    matches = pattern.exec("hello win98Yep");
    console.log(matches);//[win]
}

function case6() {
    var token = "a[href^='http://']";
    var pattern = /^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/;
    if(token.match(pattern)) {
      var tagName = RegExp.$1;
      var attrName = RegExp.$2;
      var attrOperator = RegExp.$3;
      var attrValue = RegExp.$4;
      console.log(tagName + ", " + attrName + ", " + attrOperator + ", " + attrValue);
    }
}
