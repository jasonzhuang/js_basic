jQuery.event = {
    add:function(){},
    global:{/**empty**/},
    remove:function(){},
    customEvent: {
        "getData": true,
        "setData": true,
        "changeData": true
    },
    trigger:function(event, data, elem, onlyHandlers){},
    dispatch:function(){},
    fixHooks: {/**empty**/},
    keyHooks: {},
    mouseHooks: {},
    fix: function( event ) {},
    special: {},
    simulate:function(){},
};

jQuery.event.handle = jQuery.event.dispatch;

jQuery.Event = function( src, props ) {};
jQuery.Event.prototype = {
    preventDefault:function(){},
    stopPropagation:function(){},
    stopImmediatePropagation:function(){},
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse
};

jQuery.fn.extend({
    on:function(){},
    one:function(){},
    off:function(){},
    bind:function(){},
    unbind:function(){},
    live:function(){},
    die:function(){},
    delegate:function(){},
    undelegate:function(){},
    trigger: function( type, data ) {
        return this.each(function() {
            jQuery.event.trigger( type, data, this );
        });
    },
    triggerHandler:function(){},
    toggle:function(fn){},
    hover:function(){}
});
