/**
 * Created with JetBrains WebStorm.
 * User: yougen.zhuangyg
 * Date: 14-3-2
 * Time: ����8:10
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    this.Class = function (){};

    // Create a new Class that inherits from this class
    Class.extend = function(prop) {
        var _super = this.prototype;

        //the initializing variable ensures that init() is not called when doing inheritance,
        // only when creating instances
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] = typeof prop[name] == "function" &&
                typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                (function(name, fn){
                    return function() {
                        var tmp = this._super;

                        // Add a new ._super() method that is the same method
                        // but on the super-class
                        this._super = _super[name];

                        // The method only need to be bound temporarily, so we
                        // remove it when we're done executing
                        var ret = fn.apply(this, arguments);
                        this._super = tmp;

                        return ret;
                    };
                })(name, prop[name]) :
                prop[name];
        }

        /**explain*/
        /**
        var Foo = Class.extend({
            qux: function() {
                return "Foo.qux";
            }
        });

        var Bar = Foo.extend({
            qux: function() {
                return "Bar.qux, " + this._super();
            }
        });

        Bar.prototype.qux = function () {
            var tmp = this._super;
            this._super = Foo.prototype.qux;
            var ret = (function() {
                return "Bar.qux, " + this._super();
            }).apply(this, arguments);
            this._super = tmp;
            return ret;
        }
        **/

        // The dummy class constructor
        function SubClass() {
            // All construction is actually done in the init method
            if ( !initializing && this.init )
                this.init.apply(this, arguments);
        }

        // Populate our constructed prototype object
        SubClass.prototype = prototype;

        // Enforce the constructor to be what we expect
        SubClass.prototype.constructor = Class;

        // And make this class extendable
        SubClass.extend = arguments.callee;// point to original Class.extend

        return SubClass;
    };
})();