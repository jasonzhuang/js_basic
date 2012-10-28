/**
 *  
 */
window.NEJ = {
        /**
         * 空对象实例，使用过程中不允许对其做设置操作
         * @const {NEJ.O}
         * @type  {Object}
         */
        O : {}
        /**
         * 空数组实例，使用过程中不允许对其做设置操作
         * @const {NEJ.R}
         * @type  {Array}
         */
       ,R : []
        /**
         * 空函数实例
         * @const {NEJ.F}
         * @type  {Function}
         */
       ,F : function(){return !1;}
}

function case1(){
    /**
     *  "||" priority greater than "="
     *  _package=_package[a[i]]=_package[a[i]]||{}  ==> _package=_package[a[i]]=(_package[a[i]]||{})
     */
     NEJ.P = function(_namespace){
        if (!_namespace||!_namespace.length) return null;
        var _package = window;
        var a=_namespace.split('.'),
            l=a.length,
            i=(a[0]=='window')?1:0;
        
        for(;i<l;i++){
            _package=_package[a[i]]=_package[a[i]]||{};
        }
        return  _package;
    };
    
    var p = NEJ.P("yxp.hhh");// yxp:{hhh={}}
    console.log(window.yxp);
}

function case2() {
    /**
     * define class, which has <b>static expend<b> interface: _$extend
     */
    NEJ.C = (function(){
        var _isNotFunction = function(){
            return NEJ.O.toString.call(arguments[0]) != '[object Function]';
        };
        var _getMethodName = function(_value,_map){
            for(var x in _map)
                if (_value==_map[x])
                    return x;
            return null;
        };
        // build super for method
        var _mmap = {__init:0,
                     __reset:1,
                     __destroy:2,
                     __initNode:3},
            _umap = {__supInit:0,
                     __supReset:1,
                     __supDestroy:2,
                     __supInitNode:3};
         
        return function(){
            // class constructor
            var _class = function(){
                return this.__init.apply(this,arguments);
            };
            // class inherit
            _class.prototype.__init = NEJ.F;
            _class._$extend = function(_super,_static){
                if (_isNotFunction(_super)) return;
                // extend static methods
                if (_static==null||!!_static) 
                    NEJ.X(this,_super,_isNotFunction);
                // extend instance properties and methods
                this._$super = _super;
                this._$supro = _super.prototype;
                var _parent = function(){};
                _parent.prototype = _super.prototype;
                this.prototype = new _parent();
                var _prototype = this.prototype;
                _prototype.constructor = this;
                var _tmp;
                // for common method
                for(var x in _mmap){
                    _tmp = _getMethodName(_mmap[x],_umap);
                    if (!_tmp||!this._$supro[x]) continue;
                    _prototype[x] = (function(_name){
                        return function(){
                            this[_name].apply(this,arguments);
                        };
                    })(_tmp);
                }
                // for super method
                var _pmap = {};
                for(var x in _umap){
                    _tmp = _getMethodName(_umap[x],_mmap);
                    if (!_tmp||!this._$supro[_tmp]) continue;
                    _pmap[_tmp] = _super;
                    _prototype[x] = (function(_name){
                        return function(){
                            var _result,
                                _parent = _pmap[_name],
                                _method = _parent.prototype[_name];
                            _pmap[_name] = _parent._$super||_super;
                            if (!!_method)
                                _result = _method.apply(this,arguments);
                            _pmap[_name] = _super; // fix broken chain
                            return _result;
                        };
                    })(_tmp);
                }
                _prototype.__super = _prototype.__supInit;
                return _prototype;
            };//end _$extend()
            return _class;
        };// end return function()
    })();
    
    /**
     * example1
     * [code]
     *   var _obj0 = {a:0,b:1,d:2},
     *       _obj1 = {a:"a",b:"b",c:"c"};
     *   // 根据_obj1的属性拷贝对象到_obj0
     *   var _obj = NEJ.X(_obj0,_obj1); result:{a="a",b="b",c="c",d=2}
     * [/code]
     * 
     * example2
     * [code]
     *   var _obj0 = {a:0,b:1},
     *       _obj1 = {a:"a",b:"b",c:"c"};
     *   var _filter = function(_value,_key){
     *      if(_key != "a")
     *          return false;
     *   }
     *   // 根据_obj1的属性拷贝对象到_obj0,过滤器过滤掉所有key值不是a的属性
     *   // 结果是_obj0.a = 0,_obj.b = "b",_obj.c = "c";
     *   var _obj = NEJ.X(_obj0,_obj1,_filter);
     * [/code]
     * 
     * @param  {Object}   原始对象
     * @param  {Object}   待拷贝对象
     * @param  {Function} 过滤接口
     * @return {Object}   拷贝后对象
     */
    NEJ.X = function(_object,_config,_filter){
        if (!_object||!_config) return;
        _filter = _filter || NEJ.F;
        for(var x in _config) {
            if (!_filter(_config[x],x)) {
                _object[x] = _config[x];
            }
        }
        return _object;
    };
    
    var A = NEJ.C();
    A.prototype.__init = function(){
        this.__initPrice();
    }
    
    A.prototype.__initPrice = function() {
        console.log("init Price");
    }
    
    var B = NEJ.C();
    B._$extend(A);
    // B._$extend(A, false); 不继承父类静态接口
    B.prototype.__init = function(){
        this.__supInit();
    }
    
    B.prototype.__initTransport = function(){
        console.log("this is B's transport");
    }
    
    var b = new B();
    b.__initPrice();
    b.__initTransport();
}

function case3(){
    case2();
    var _$$Event = NEJ.C();
    _$$Event._$allocate = function(_options) {
        _options = _options||{};
        var _instance = new this(_options);
        _instance.__xxxx = !0;
        return _instance;
    }
    
    var widget = _$$Event._$allocate({
       conf0 : "config0",
       conf1 : "config1",
       onchange : function() {
           console.log("this is onchgange handler");
       } 
    });
    console.log(widget);
}

(function(){
    //case1();
    //case2();
    case3();
})()


