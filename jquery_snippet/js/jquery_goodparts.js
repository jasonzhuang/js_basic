/**
 * what jquery does
 *
 */
var jQuery = (function(){
    var jQeury = function(selector, context){
        // The jQuery object is actually just the init constructor 'enhance'
        return new jQuery.fn.init(selector, context);
    };

    bunchastuff();
    //...

    return (window.jQuery = window.$ = jQeury);
}());

/**
 *
 * what $.fn does
 */
jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init : function(selectorm, context, rootjQuery){
        // handle $(DOMElement), $(function)...
        return jQuery.makeArray(selector, this);
    }
}

/**
 * refer http://api.jquery.com/jQuery/ and init()  in source code
 * case1: $('<div class="g-sorry"></div>'), create the html element and wrap with jQuery properties
 * case2: $(function()), short cut for $.ready(function())
 * case3: $("div#main"), select element and wrap them with jQuery properties
 * case4: $("li", "li.item-ii"), equals $("li.item-ii").find("li"); $(selector, context) becomes $(context).find(selector)
 *
 */
function what$do(){
    //Handle HTML strings
    if(typeof selector === "string") {
        //bara bara .....
        this.context = document;
        this.selector = selector;
        return this;
    } 

    // HANDLE: $(expr, context)
    // (which is just equivalent to: $(context).find(expr)
    else {
        return this.constructor( context ).find( selector );
    }
    
         
    // HANDLE: $(function)
    // Shortcut for document ready
    if( jQuery.isFunction( selector )) {
         return rootjQuery.ready( selector );
    }
    
    // handle no match case
    if (selector.selector !== undefined) {
                        this.selector = selector.selector;
                        this.context = selector.context;
    }

    return jQuery.makeArray( selector, this );
}


/**    
 *     jQuery.each = function(elem, callback, args){
 *        //bara...
 *     }
 * 
 *     //use for traversal
 *     jQuery.fn.each = function(callbacks, args) {
 *         jQuery.each(this, callback, args);
 *     }
 * 
 *     case1: http://api.jquery.com/jQuery.each/
 *     $("li").each(function(key,value) {
 *          console.log(key, value);
 *     });
 *     
 *     case2:, http://api.jquery.com/each/
 *     var parks = ["one", "new", "chin"];
 *     $.each(parks, function(index, value) {
 *           //...
 *     });
 * 
 *     case3:plugin use
 *     
 *     $.fn.plugin = function(){
 *        console.log(this);//this refer to $() which has the elements of the selector element
 *           return this.each(function(){
 *               console.log(this);//selector element
 *               console.log("just say something");
 *           }
 *        );
 *     }
 * 
 *     $("<div></div>").plugin();
 *  
 */
function eachCase(){
    var settings = {"validate":true,"limit":5,"name":"bar"};
    function printObj(obj){
      var arr = [];
      $.each(obj, function(key, val) {
        var next = key + ": ";
        next += val;
        arr.push( next );
      });
      return "{ " +  arr.join(", ") + " }";
    }
    printObj(settings);
}


//new Function
function parseJSON(data){
    return window.JSON && window.JSON.parse ?
                                window.JSON.parse( data ) :
                                (new Function("return " + data))();
}

// release memory
assert = function( fn ) {
    var div = document.createElement("div");

    try {
        return fn( div );
    } catch (e) {
        return false;
    } finally {
        // release memory in IE
        div = null;
    }
}

assertTagNameNoComments = assert(function( div ) {
    div.appendChild( document.createComment("") );
    return !div.getElementsByTagName("*").length;
})


/**
 * learn context && override function, refer proxy API
 * 
 * jQuery.proxy( function, context )
 * jQuery.proxy( context, name )
 * 
 */
proxy = function( fn, context ) {
        var tmp, args, proxy;

        //handle jQuery.proxy( context, name )
        if ( typeof context === "string" ) {
            tmp = fn[ context ];
            context = fn;
            fn = tmp;
        }

        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if ( !jQuery.isFunction( fn ) ) {
            return undefined;
        }

        // Simulated bind
        args = Array.prototype.slice.call( arguments, 2 );
        proxy = function() {
            return fn.apply( context, args.concat( Array.prototype.slice.call( arguments ) ) );
        };

        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;

        return proxy;
};

function useProxy() {
    var you = {
      type: "person",
      test: function() {
        console.log( this.type + " " );
      }
    };
    
    var youClick = $.proxy( you.test, you );
    console.log(youClick);
};

/**
 *  jQuery Event base on jQuery.data mechanism
 * 
 *  Within the callback function, this refers to the current DOM element, so should wrap as $(this)
 *  
 *  Notice the update: live-> bind-> on
 * 
 *  trigger(event, params), params can pass to handler
 */
function useEvent(){
    var div = document.createElement("div");
    $(div).bind('custom', function(event, param1, param2) {
      console.log(param1 + "\n" + param2);
    });
    $(div).trigger('custom', ['Custom', 'Event']);
    
    var div = document.createElement("div");
    $(div).bind("customer customer2", {js_good:"js_good"}, function(e/**e is an instance of jQuery.Event**/) {console.log(e)});
    $(div).trigger("customer");
}

jQuery.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
};

/**
 * 
 * Delegate to another class
 *  
 */
function Tween( elem, options, prop, end, easing ) {
    return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;
Tween.prototype = {
    constructor: Tween,
    init: function( elem, options, prop, end, easing, unit ) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || "swing";
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
    }
    // ......
}
//assign the init() function prototype
Tween.prototype.init.prototype = Tween.prototype;


/**
 * Array-like object, jquery objects are treated as arrays
 * $.merge() also work for jQuery Object
 */
function fakeArray(){
    var fakeArray = {"length": 1, 0: "Addy", 1: "Subtracty"}; //Note:length will affect the result
    var realArray = $.makeArray( fakeArray );
    
    var arr = [ "a", "b", "c", "d", "e" ];
    //will NOT change original Array 
    var result = $.map(arr, function(value,index){
       return value + value; 
    });
    
    //merge will change the first Array
    $.merge($("<div>a</div>",$("<div>b</div>")));
    
    /**
     * merge source code
     *  
     */
    merge = function( first, second ) {
        var i = first.length,
            j = 0;

        if ( typeof second.length === "number" ) {
            for ( var l = second.length; j < l; j++ ) {
                first[ i++ ] = second[ j ];
            }

        } else {
            while ( second[j] !== undefined ) {
                first[ i++ ] = second[ j++ ];
            }
        }

        first.length = i;

        return first;
    };
    
}

/**
 * quick decision and scenario judge
 * !!undefined === false, !!null === false
 */
function beautyDecision(){
    if ( (options = arguments[ i ]) != null ) {
        //bara bara ....
    }
    
    memory = !flags.memory || [ context, args ];
    
    clone = src && jQuery.isPlainObject(src) ? src : {};
    
    isArray = Array.isArray || function( obj ) {
        return jQuery.type(obj) === "array";
    },
    
    //inv may not pass, so the value will be undefined
    grep = function(elems, callback, inv) {
        inv = !!inv;
        //....
    }
    
    // Unique for each copy of jQuery on the page
    expando = "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),
    
    data = data === "true" ? true :
        data === "false" ? false :
        data === "null" ? null :
        jQuery.isNumeric( data ) ? parseFloat( data ) :
            rbrace.test( data ) ? jQuery.parseJSON( data ) :
            data;
            
    // Attach a bunch of functions
    jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
        jQuery.fn[ o ] = function( f ){
            return this.bind( o, f );
        };
    });
    
    param = ['id=1234','limit=50'];
    url = "/test.py" + "?" + param.join("&");
    
    //if hasData() is true, then return the value of jQuery._data();,
    //otherwise, return false
    var elemData = jQuery.hasData( elem ) && jQuery._data( elem );
    
    var ret = [].join("&"); //value is ""
    
    // Allow instantiation without the 'new' keyword
    if ( !(this instanceof jQuery.Event) ) {
        return new jQuery.Event( src, props );
    }
    
    event = typeof event === "object" ?
        // jQuery.Event object
        event[ jQuery.expando ] ? event :
        // Object literal
        new jQuery.Event( type, event ) :
        // Just the event type (string)
        new jQuery.Event( type );

     Array.prototype.slice("hello",0);//[h,e,l,l,o]
     Array.prototype.slice($(".demo"),0);//elems

     /**toggleClass source**/
     self = jQuery(this); 
     state = isBool ? state : !self.hasClass( className );
     self[ state ? "addClass" : "removeClass" ]( className );
     
     hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
     
     if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
        return ret;
     }
     
     /**
      * temp change value
      * 
      * jQuery.swap( elem, { "display": "inline-block" },
                        curCSS, [ elem, "marginRight" ] );
      */
     swap = function( elem, options, callback, args ) {
        var ret, name,
            old = {};

        // Remember the old values, and insert the new ones
        for ( name in options ) {
            old[ name ] = elem.style[ name ];
            elem.style[ name ] = options[ name ];
        }

        ret = callback.apply( elem, args || [] );

        // Revert the old values
        for ( name in options ) {
            elem.style[ name ] = old[ name ];
        }

        return ret;
     }
}

/**
 * chain pattern, always return itself
 * 
 */
function chainPattern(){
    var
        list = [],
        memory,
        firing,
        add = function(args) {
            //bara bara ...
        },
        fire = function(context,args) {
            //bara bara ...
        },
        // Actual Callbacks object
        self = {
            add:function(){
                if ( list ) {
                    var length = list.length;
                    add( arguments ); // invoke private function
                    if ( firing ) {
                        firingLength = list.length;
                    } else if ( memory && memory !== true ) {
                        firingStart = length;
                        fire( memory[ 0 ], memory[ 1 ] );//this line is how the memory works
                    }
                }
            },
            disable:function(){
                list = stack = memory = undefined;
                return this;
            }
            
        };
        
        return self;
}


/**
 * plugin pattern
 * 
 * If only one argument is supplied to $.extend(), this means the target argument was omitted.
 * In this case, the jQuery object itself is assumed to be the target. This can be useful for plugin.
 * In the source code, jQuery.extend({}) use frequently.
 * 
 * jQuery.extend({...}), jQuery.fn.extend({....}):
 * $.extend() use as $.extend();
 * $.fn.extend() use as $("xxx").extend()
 * 
 * Note the |this|.each
 * 
 */
function pluginPattern(){
    jQuery.extend({
        foo:function(){
            console.log("this is foo");
            return this;
        },
        
        bar:function(){
            console.log("this is bar");
        },
        
        outFoo:function(){
            console.log("this is addFoo");
            return this;
        },
        
        findBar:function(){
            return this.each(function(){
                var self = jQuery(this);
                self.outFoo();
            })
        }
    });
    
    jQuery.fn.extend({
        findBar:function(){
            return this.each(function(){
                var self = jQuery(this);
                self.outFoo();
            })
        }
    });
}

/**
 * use jQuery.data()
 * Calling .data() with no parameters retrieves all of the values as a JavaScript object
 * 
 * Note how to define both get and set function
 * 
 * .data( key, value )
 * .data( key )
 */
function useData(){
    var div = document.createElement("div");
    console.log($(div).data("test1"));
    $(div).data("test1", "VALUE-1");
    console.log($(div).data("test1"));
    console.log($(div).removeData("test1"));
    
    /**
     * <div data-role="page" data-last-value="43" data-hidden="true" data-options='{"name":"John"}'></div> 
     */
    $("div").data("role");
}

/**
 * refer : http://stackoverflow.com/questions/12252709/callbacks-disable-vs-callbacks-lock/12252901#comment19667168_12252901
 *  
 * disable() VS lock() in jQuery.Callbacks
 *  
 * lock:Prevents further calls to fire, but allows more callbacks to be added
 * disable:Prevents further calls to both fire & add
 * "stack" property:You might be calling fireWith (or fire, which internally calls fireWith) from within one of your callbacks, 
 * in which case "firing" property will be true
 * 
 */
function useCallbacks(){
    function fn1( value ) {
        console.log( value );
    }
     
    function fn2( value ) {
        fn1("fn2 says: " + value);
        return false;
    }

    //disable vs lock
    (function(){
        var callbacks = $.Callbacks("memory");
        callbacks.add(fn1);
        callbacks.fire("foo");
        callbacks.lock();//disable()
        callbacks.add(fn2);
        callbacks.fire("bar");
    })();
    
    //stack illustration
     (function(){
        var callbacks = $.Callbacks(),
            counter = 1;
         
        callbacks.add(function (passNum) {
          console.log('Pass #' + passNum + ' says: ' + 1);
        });
        
        callbacks.add(function (passNum) {
          console.log('Pass #' + passNum + ' says: ' + 2);
          if ( ++counter <= 2) callbacks.fire(counter);
        });

        callbacks.add(function (passNum) {
          console.log('Pass #' + passNum + ' says: ' + 3);
        });
        
        callbacks.fire(counter);
    })();

    /**
     * Pass #1 says: 1
     * Pass #1 says: 2
     * Pass #1 says: 3
     * Pass #2 says: 1
     * Pass #2 says: 2
     * Pass #2 says: 3
     */


    /**
     * change fireWith, no stack
     * the above case output:
     * Pass #1 says: 1
     * Pass #1 says: 2
     * //the following is invoked by the inner fire in add()
     * Pass #2 says: 1
     * Pass #2 says: 2
     * Pass #2 says: 3
     */
    fireWith = function( context, args ) {
        args = args || [];
        args = [ context, args.slice ? args.slice() : args ];
        if ( list && ( !fired || stack ) ) {
            fire( args ); //immediately fire
        }
        return this;
    }
}

/**
 * use queue
 * refer: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me
 */ 
function useQueue() {
    var theQueue = $({});
        $.each([1,2,3],function(i, num) {
            theQueue.queue('log', function(next) { 
               console.log("i: " + i + ", num: " + num);
               console.log(next + "");//next is function definition: function() {jQuery.dequeue(elem, type)}
               next();
            });
        });
    theQueue.dequeue('log');
}