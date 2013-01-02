(function runAll(){
    // case1();
    //case2();
    //case3();
    //case4();
    //case5();
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

/**
 * bad way
 * 
 */
function warning(){
    for(var i= 0;i<elements.length;i++){
        (function(n){
            elements[n].attachEvent('click',function(){
            alert(n);
         });
        })(i);
    }
}

/**
 * Enforcing Function Context
 * 
 */
function case3(){
    Function.prototype.bind = function(){
        var fn = this;
        console.log(fn+"");// myFunction definition
        var args = Array.prototype.slice.call(arguments);//copy params
        var object = args.shift();
        return function(){
            return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
    
    var myObject = {};
    function myFunction(){
        return this == myObject;
    }
    
    console.log(myFunction() === false);
    console.log(myFunction.bind(myObject)() === true);
}

/**
 * currying 
 */
function case4(){
    function curry(fn){
        var args = Array.prototype.slice.call(arguments,1);//here arguments is curry's arguments, different from the return function
        console.log("outer args: " + args);
        return function(){
            var innerArgs = Array.prototype.slice.call(arguments);
            console.log("innerArgs: " + innerArgs);
            var finalArgs = args.concat(innerArgs);
            console.log("finalArgs: " + finalArgs);
            return fn.apply(null, finalArgs);
            /**same as:
             * var result = fn.apply(null, finalArgs);
             * return result;
             */
        }
    }
    
    function add(num1, num2){
        return num1 + num2;
    }
    
    //curry definition has only one param, but pass two params to it
    var curriedAdd = curry(add, 5);
    console.log(curriedAdd + "");
    //currriedAdd definition has no param, but here pass a param to it
    console.log(curriedAdd(3));
}

/**
 * (function(){})()
 * instantly created, executed, and discarded
 */
function case7(){
    document.addEventListener("click", (function(){
        var numClicks = 0;
        return function(){
            alert( ++numClicks );
        };
    })(), false);
}

