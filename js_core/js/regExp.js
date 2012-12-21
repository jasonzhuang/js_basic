/**
 * exec: It returns an array of information or null on a mismatch
 * test: It returns true or false
 * [xyz]: A character set, Special characters (such as the dot (.) and the asterisk (*)) do not have any special meaning inside a character set
 */
(function runAll(){
    //case1();
    //case2();
    //case4()
    //case5();
    //case6();
    //case7();
    //case8();
    case9();
})();

//RegEx.match(), $n store capture match
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
    
    var result = /hello/.test("jkjkj");
    console.log(result);
}

//trim white space
function case3(){
    var text="  hello word  JS  ";
    console.log("before trim length: " + text.length);
    var pattern = /^\s+|\s+$/g;
    var result = text.replace(pattern, '');
    console.log("after trim length: " + result.length);
}

// (?:x), Matches 'x' but does not remember the match
function case4() {
    var pattern = /(some)/;
    var pattern2 = /(?:some)/;
    var text = "something";
    var matches = pattern.exec(text);
    var matches2 = pattern2.exec(text);    console.log(matches);
    console.log(matches2);
}


// x(?=y), Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead
function case5() {
    var text = "hello winYEP98";
    var pattern = /win(?=98)/;
    var matches = pattern.exec(text);
    console.log(matches);//null
    matches = pattern.exec("hello win98Yep");
    console.log(matches);//[win]
}

//x(?!y), Matches 'x' only if 'x' is not followed by 'y'. This is called a negated lookahead.
function case8(){
    var text = "helloherk";
    var pattern = /llo(?!j)/;
    var matches = pattern.exec(text);
    console.log(matches);
}


//match is String's function
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

//?, If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy
function case7(){
    var text = "foo bar";
    var match1 = /\s\w*/.exec(text);//greedy
    var match2 = /\s\w*?/.exec(text);//no-greedy
    console.log(match1);
    console.log(match2)
}

//flag
function case9(){
    var text = "fee fi fo fum";
    var pattern = /\w+\s/g;
    console.log(pattern.exec(text));//fee
    console.log(pattern.exec(text));//fi
}
