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

/**
 * refer http://api.jquery.com/jQuery/ and init()  in source code
 *  
 * case1: $('<div class="g-sorry"></div>'), create the html element and wrap with jQuery properties
 * case2: $(function()), short cut for $.ready(function())
 * case3: $("div#main"), select element and wrap them with jQuery properties
 * case4: $("li", "li.item-ii"), equals $("li.item-ii").find("li");
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


/**    each:function(object, callback, args )
 *
 *     case1: object refer to jQuery
 *     var list = $("li");
 *      list.each(function(index,value) {
 *          console.log(index, value);
 *      });
 *     
 *      case2: object refer to parks
 *       var parks = ["one", "new", "chin"];
 *       $.each(parks, function(index, value) {
 *           //...
 *      });
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

//event object
function Event(){
    jQuery.Event = function( src, props ) {
        // Allow instantiation without the 'new' keyword
        if ( !(this instanceof jQuery.Event) ) {
            return new jQuery.Event( src, props );
        }
    
        // Event object
        if ( src && src.type ) {
            this.originalEvent = src;
            this.type = src.type;
    
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
                src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;
    
        // Event type
        } else {
            this.type = src;
        }
    
        // Put explicitly provided properties onto the event object
        if ( props ) {
            jQuery.extend( this, props );
        }
    
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();
    
        // Mark it as fixed
        this[ jQuery.expando ] = true;
    };
}

/**
 * 
 *  Within the callback function, this refers to the current DOM element, so should wrap as $(this)
 */
function useEvent(){
    /**
     * <ul id="browsers">
          <li>Chrome</li>
          <li>Safari</li>
          <li>Firefox</li>
          <li>Opera</li>
        </ul>
     *  
     */
      $('li').click(function() {
        var $li = $(this);
        $li.css("background", "red");
      });
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
 * override function  
 * toggleClass()
 * 
 * .toggleClass( className )
 * .toggleClass( className, switch )
 * .toggleClass( function(index, class, switch) [, switch] )
 */
function useToggleClass(){
    /**
     * <p class="blue">Click to toggle</p>
     * <p class="blue highlight">highlight</p>
     * <p class="blue">on these</p>
     * <p class="blue">paragraphs</p>
     * 
     */
    $("p").click(function () {
      //$(this) refer to the current element
      $(this).toggleClass("highlight");
    });
}


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
 * Array-like object
 * 
 */
function fakeArray(){
    var fakeArray = {"length": 1, 0: "Addy", 1: "Subtracty"};
    var realArray = $.makeArray( fakeArray );
    $.map( realArray, function(val, i) {
      // do something 
    });
    
    var arr = [ "a", "b", "c", "d", "e" ];
    //will NOT change original Array    
    var result = $.map(arr, function(value,index){
       return value + value; 
    });
}
