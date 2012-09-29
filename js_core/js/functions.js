(function runAll(){
    // case1();
    //case2();
    //case3();
    //case4();
    case5();
    //case8();
    //case7();
})();

function case1(){
    var ninja = {
        yell: function yell(n){
            return n > 0 ? yell(n-1) + "a" : "hiy";
        }
    }
        
    var samurai = {yell: ninja.yell};
    var ninja = {};
    
    console.log(samurai.yell(4));
}

/**
 * Anonymous functions can be named but those names are only visible
 * within the functions themselves.
 */
function case2(){
   var ninja = function myNinja(){
    console.log(ninja == myNinja);
   }

    ninja();
    
    console.log(typeof myNinja == "undefined"); 
};


/**
 * anonymous function only exist after the point in the code at which they've been defined.
 * 
 */
function case3(){
    console.log(typeof canFly == "undefined");
    console.log(typeof stealth == "function")
    var canFly = function(){console.log("this is canFly function")};
    function stealth(){console.log("this is stealth function")}
}


/**
 * Storing function
 */
function case4(){
    var store = {
        id: 1,
        cache: {},
        fns : [],
        add: function(fn) {
            if(!fn.id) {
                fn.id = store.id++;
                store.fns[fn.id] = fn;
                return !!(store.cache[fn.uuid] = fn );
            }
        }
    }
    
    function ninja(){console.log("ninja function")};
    store.add(ninja);
    var fn = store.fns[1];
    fn();   
}

/**
 * Function as Object, which can attach property and function
 */
function case5() {
    function getElements(name) {
        return getElements.cache[name] = getElements.cache[name] || document.getElementsByTagName(name);
    }

    function base() {
        console.log("this is base");
    }
    
    base.partial = function(){
        console.log("this is partial");
    }
    
    base.partial();
}

/**
 * Context
 */
function case6(){
    var shuriken = {
        toss:function(){
            this.isSharp = true;
        }
    };
    shuriken.toss();
    console.log(shuriken.isSharp === true);
    
    function katana(){
        this.isSharp = true;
    }
    
    katana();
    console.log("window.isSharp: " + (window.isSharp === true));
}

/**
 * arguments and function length
 */
function case7(){
    console.log("multiParam length: " + multiParam.length);
    
    function multiParam(multi){
        console.log("arguments.length: " + arguments.length);
        console.log("multi is: " + multi);//3
        var args = Array.prototype.slice.call(arguments);//copy params
        console.log(args);
        var result = args.concat(100,200);
        console.log("args concat result: " + result);
        
    }
    multiParam(3,1,2,3);
    
    function bind(){
        console.log(arguments.length);
    }
    //even the bind() has no params, you can still pass param
    bind("hello", 5);
}

/**
 * overloading
 */
function case8(){
    function Ninjas(){
        var ninjas = [ "Dean Edwards", "Sam Stephenson", "Alex Russell" ];
        
        addMethod(this, "find", function(){
            return ninjas;
        });
        

        addMethod(this, "find", function(name){
            var ret = [];
            for ( var i = 0; i < ninjas; i++ ){
                if (ninjas[i].indexOf(name) == 0) {
                    ret.push( ninjas[i] );
                }
            }
            return ret;
        });
        
        addMethod(this, "find", function(first, last){
            var ret = [];
            for (var i = 0; i < ninjas; i++ ) {
                if (ninjas[i] == (first + "" + last) ) {
                    ret.push( ninjas[i] );
                }
            }
            return ret;
            
        });

        function addMethod(object, name, fn){
            var old = object[name];
            object[name] = function(){
                if(fn.length == arguments.length){
                    return fn.apply(this, arguments);
                } else if(typeof old == "undefined") {
                    return old.apply(this, arguments);
                }
            }
        }  
     }
     
     var ninjas = new Ninjas();
     console.log(ninjas.find().length == 3);   
}


