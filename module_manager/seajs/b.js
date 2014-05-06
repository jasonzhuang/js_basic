/**
 * Created by yougen.zhuangyg on 2014/4/25.
 */
define(function(require,exports, module){
    console.log("b file...")

    function B(){}

    B.prototype.dance = function() {
        console.log("dance");
    }

    //module.exports = B;
    return B;
})