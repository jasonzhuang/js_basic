/**
 * Created by yougen.zhuangyg on 2014/4/30.
 */
define(function(require){
    var button = document.createElement("button");
    button.onclick = function(){
        var alerter = require("./alerter");
        alerter("hello");
    };
    button.textContent = "Click";
    document.body.appendChild(button);
})