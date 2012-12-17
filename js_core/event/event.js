(function runAll(){
    //simulateClick();
    //customerClick();
    contextBind();
})()

function contextBind(){
    var handler = {
        message: "Event handled",
        handleClick: function(event){
            alert(this.message + ":" + event.type);
        }
    };
    
    var btn = document.getElementById("btn");
    //EventUtil.addHandler(btn, "click", handler.handleClick); //wrong
    
    //solution
    function bind(fn, context) {
        return function() {
            return fn.apply(context, arguments);
        }
    }
    
    EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));
}

function simulateClick(){
    var evt = document.createEvent('Event');
    // define that the event name is `build`
    evt.initEvent('build', true, true);
    
    var btn = document.getElementById("btn");
    btn.addEventListener("build", simulateHandler, false);

    btn.dispatchEvent(evt);
        
    function simulateHandler(event) {
        console.log("this is build handler");
    }
}

function customerClick() {
    var evt = new CustomEvent('customerBuilder');
    var btn = document.getElementById("btn");
    btn.addEventListener('customerBuilder', function(e){console.log("customer build handler")}, false);
    btn.dispatchEvent(evt);
}

function loadImage(){
    var image = document.createElement("img");
    EventUtil.addHandler(image, "load", function(event){
        event = EventUtil.getEvent(event);
        alert(EventUtil.getTarget(event).src);
    });
    image.src = "images/leaves.jpg";
}

function resizeWin() {
    EventUtil.addHandler(window, "resize", function(event){
       alert("Resized"); 
    });
}

function contextmenuUse(){
    EventUtil.addHandler(window, "load", function(event) {
        var div = document.getElementById("content");
        if(div == undefined) {
            return;
        }
        EventUtil.addHandler(div, "contextmenu", function(event) {
           event = EventUtil.getEvent(event);
           EventUtil.preventDefault(event);
           var menu = document.getElementById("myMenu");
           menu.style.left = event.clientX + "px";
           menu.style.top = event.clientY + "px";
           menu.style.visibility = "visible";
        });
        
        EventUtil.addHandler(document, "click", function(event) {
           document.getElementById("myMenu").style.visibility = "hidden"; 
        });
    });
}

function leaveAlert(){
    EventUtil.addHandler(window, "beforeunload", function(event){
        event = EventUtil.getEvent(event);
        event.returnValue = "Are you sure to leave?";
    })
}