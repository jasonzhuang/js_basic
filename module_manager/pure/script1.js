/**
 * Created by yougen.zhuangyg on 2014/4/20.
 */
(function(global){
    //sleep(2000);

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }

    var Script1 = function(){};
    Script1.init = function(){
        console.log("script1 init");
    }

    global.Script1 = Script1;
    console.log("script1 loaded");
}(window));
