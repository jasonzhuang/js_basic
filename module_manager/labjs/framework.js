/**
 * Created by yougen.zhuangyg on 2014/5/1.
 */
;(function(global){
    console.info("execute framework");
    var framework = {};
    framework.init = function(){
        console.log("framework init() called");
    };

    global.framework = framework;
})(this);

