define(function(require, exports, module){
    /*console.log("begin index...");

    var a = require("./aaaa.js") || require("./a.js"); // execute module a
    console.log("doing in index....");
    console.log(a);
    if(false){
        var b = require("./b.js"); // download, but never execute module b
    }*/
    //var app = require("./app");
    var A = require("./a.js");
    var a = new A();
    a.dance();
});