function queryResult(){
    /**
     * <div>
     *  <ul>
     *     <li id="item">Item one</li>
     *     <li>Item two</li>
     *  </ul>
     * </div>
     */
    var ele = $("#item");
    console.log(ele instanceof Element)//false
    ele = document.getElementById("item");
    console.log(ele instanceof Element);//true
}

//refer init() function
function what$do(){
    //Handle HTML strings
    if(typeof selector === "string") {
        //bara bara .....
        this.context = document;
        this.selector = selector;
        return this;
    } 
    
    // HANDLE: $(function)
    // Shortcut for document ready
    else if( jQuery.isFunction( selector )) {
         return rootjQuery.ready( selector );
    }
    
    // handle no match case
    if (selector.selector !== undefined) {
                        this.selector = selector.selector;
                        this.context = selector.context;
    }

    return jQuery.makeArray( selector, this );
}


//note how the callback parameters come from
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
 * learn context && override, refer proxy API
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


