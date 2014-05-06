/**
 * Created with JetBrains WebStorm.
 * User: yougen.zhuangyg
 * Date: 14-4-2
 * Time: 下午5:39
 * To change this template use File | Settings | File Templates.
 */
define(function(require,exports, module){
    console.log("a file...");

    function A(){}

    A.prototype.dance = function() {
        console.log("dance");
    }

    module.exports = A;
});