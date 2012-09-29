(function runAll(){
    //case1();
    case4();
})();

function case2(){
   var text = "cat, bat, sat, fat";
    var pattern = /.at/g;
    
    var matches = pattern.exec(text);
    console.log(RegExp.lastMatch);
    
    matches = pattern.exec(text);
    console.log(RegExp.lastMatch);
    
    text = "this has been a short summer";
    pattern = /(..)or(.)/g;
    
    if(pattern.test(text)) {
        console.log(RegExp.$1);
        console.log(RegExp.$2);
    } 
}

function case1(){
    var text = "hahahhaluckyCount=2";
    var pattern = /luckyCount=(\d{1})/g;
    var matches = pattern.exec(text);
    console.log(matches);
    console.log("luckyCount: " + RegExp.$1);
}

//trim white space
function case3(){
    var text="  hello word  JS  ";
    console.log("before trim length: " + text.length);
    var pattern = /^\s+|\s+$/g;
    var result = text.replace(pattern, '');
    console.log("after trim length: " + result.length);
}

function case4(){
    var text="tab over";
    var result = text.replace(" over", "");
    console.log(result);//tab
}
