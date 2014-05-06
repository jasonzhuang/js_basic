/**
 * Created by yougen.zhuangyg on 2014/4/20.
 */
(function(global){
    var Script3 = function(){};
    Script3.init = function(){
        console.log("script3 init");
    }

    global.Script3 = Script3;
    console.log("script3 loaded");
}(window));