/**
 * Created by yougen.zhuangyg on 2014/5/3.
 */
AE.define('foo', function () {
    // console.log(this);
    /*try {
        console.log(exports);
    }catch(e){
        console.log(e); // exports is not defined
    }*/

    var Foo = function(name){this.name = name;};
    Foo.prototype = {
        dance: function(){
            console.log("dance!!!");
        }
    };

    /*return {
       Foo: Foo,
       min: "min"
    };*/
    console.log("======before modify exports=======");
    console.log(this.exports);
    //can't omit this for invoking exports.xx
    this.exports.Foo = Foo;
    this.exports.x = 1;
    console.log("=====after modify exports====");
    console.log(this.exports);
});