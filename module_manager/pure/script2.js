/**
 * Created by yougen.zhuangyg on 2014/4/20.
 */
(function(global){
    //sleep(1000);

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }

    var Script2 = function(){};
    Script2.init = function(){
        console.log("script2 init");
    }

    global.Script2 = Script2;
    console.log("script2 loaded");
}(window));