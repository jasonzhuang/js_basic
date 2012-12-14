(function runAll(){
    // case1();
    //case2();
    //case3();
    //case4();
    //case5();
    //case6();
    //case7();
    //case8();
    //case9();
    //case10();
    case11();
})();

/**
 * 
 * static function, private function, public function
 */
function case11(){
    function Sizzle(){
        //public function
        this.say = function(msg){
            inner(msg);
        }
        
        //private function
        var inner = function(msg){
            console.log(msg);
        }
    }
    
    //static function
    Sizzle.error = function(msg){
        console.log(msg);
    }
    
    var sizzle = new Sizzle();
    sizzle.say("say.....");
    console.log(sizzle);
    Sizzle.error("hhhh");
} 

/**
 * function name is simply pointer to function
 * 
 */
function case9() {
    function add(){
        console.log(arguments.callee == add);   
    }
    add();
}

/**
 * apply() and call()
 */
function case8() {
    var list = [1,2,3];
    var result = Array.prototype.slice.apply(list);
    console.log(result);
}

/**
 * 
 * return function as value
 */
function case10(){
    function compareFunction(propName) {
        return function(obj1, obj2) {
            var value1 = obj1[propName];
            var value2 = obj2[propName];
            
            if(value1 < value2) {
                return -1;
            } else if(value1 > value2) {
                return 1
            } else {
                return 0;
            }
        }
    }
    
    var data = [{name: "zachary", age:28}, {name:"Nicholas", age:29}];
    console.log(compareFunction("name")(data[0],data[1]));
}


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
 * 
 */
function case2(){
   var ninja = function myNinja(){
       console.log(ninja == myNinja);
   }

    ninja();
    
    console.log(typeof myNinja == "undefined"); 
};


/**
 * function declaration vs function expression
 * anonymous function only exist after the point in the code at which they've been defined.
 */
function case3(){
    console.log(typeof canFly == "undefined");
    console.log(typeof stealth == "function");
    var canFly = function(){console.log("this is canFly function")};
    function stealth(){console.log("this is stealth function")};
    
    var handlePositionUpdate = function() {
        console.log("handlePositionUpdate() executed");
        uploadLocations();
        storeLocation();
    }

    //handlePositionUpdate(); //error:uploadLocations is not a function

    var uploadLocations = function() {
        console.info("this is uploadLocations()");
    }
    
    //handlePositionUpdate(); //error:storeLocation is not a function
    
    var storeLocation = function() {
        console.info("this is storeLocation()");
    }
    
    handlePositionUpdate(); // work fine
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
 * arguments.length and function.length
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
    //named arguments are a convenience, not a necessity
    bind("hello", 5);
}


