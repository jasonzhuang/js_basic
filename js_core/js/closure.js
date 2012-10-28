(function runAll(){
    //case1();
    //case2();
    //case3();
    //case4();
    //case5();
    //case6();
    //case7();
    case8();
})();

/**
 * private varibales
 */
function case1(){
    function Ninja(){
        var slices = 0;
        
        this.getSlices = function(){
            return slices;
        }
        
        this.slice = function(){
            slices++;        
        }
    }
    
    var ninja = new Ninja();
    ninja.slice();
    console.log(ninja.getSlices() == 1);
    console.log(ninja.slices === undefined );
}


function case2(){
    (function createElement(){
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.id = "box";
        var text = document.createTextNode("Box!");
        div.appendChild(text);
        document.body.appendChild(div);
    })();
    
    var elem = document.getElementById("box");
    var count = 0;
    
    var timer = setInterval(function(){
        if(count<=100) {
            elem.style.left = count + "px";
            count++;
        } else {
            console.log("count is 100");
            console.log("timer reference is via a closure");
            clearInterval(timer);
        }
    }, 10);
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

function case5(){
    Function.prototype.partial = function(){
        var fn = this, args = Array.prototype.slice.call(arguments);
        console.log(args);
        console.log(fn+"");//split function
        return function(){
            var arg = 0;
            for ( var i = 0; i < args.length && arg < arguments.length; i++ )
                if ( args[i] === undefined ) {
                    args[i] = arguments[arg++];
                }
            return fn.apply(this, args);
        };
    };
    
    String.prototype.csv = String.prototype.split.partial(/,\s*/);
    var results = "John, Resig,   Boston".csv();
}

/**
 * Memoization, attach property and method on function
 */
function case6(){
    Function.prototype.memorized = function(key){
        this._values = this._values || {};
        return this._values[key] !== undefined ? this._values[key] :this._values[key] = this.apply(this, arguments);
    }
    
    function isEven(num) {
        return num%2 == 0 ? true : false;
    }

    console.log(isEven.memorized(4));
    console.log(isEven._values[4]);
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

