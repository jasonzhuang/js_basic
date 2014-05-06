/**
 * Created by yougen.zhuangyg on 2014/5/1.
 */
;(function(global){
   console.info("execute plugin.framework");
   var plugin = {};
   plugin.doSomething = function(){
       global.framework.init();
       console.log("plugin doSomething() called");
   }

   global.plugin = plugin;
})(this);