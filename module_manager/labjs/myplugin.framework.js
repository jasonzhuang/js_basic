/**
 * Created by yougen.zhuangyg on 2014/5/1.
 */
(function(global){
    console.info("execute myplugin");
    var myplugin = {};

   myplugin.doSomething = function(){
       global.framework.init();
       console.log("myplugin doSomething() called");
   }
  global.myplugin = myplugin;
})(this);