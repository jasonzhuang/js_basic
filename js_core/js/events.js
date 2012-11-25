var EventUtil = {
    addHandler:function(element, type, handler) {
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent) {
            element.attachEvent("on" + type, handler);
        }else {
            element["on" + type] = handler;
        }
    },
    getEvent:function(event) {
        return event? event:window.event;
    },
    getTarget:function(event) {
        return event.target || event.srcElement;
    },
    preventDefault:function(event) {
        if(event.preventDefault) {
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    },
    removeHandler:function(event) {
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.detachEvent) {
            element.detachEvent("on" + type, handler);
        }else {
            element["on" + type] = null;
        } 
    },
    stopPropagation:function(event) {
        if(event.stopPropagation) {
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    }
};


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

function mockEvent() {
    var btn = document.getElementById("myBtn");
    EventUtil.addHandler(btn, "click", function(event){
        alert("this event is simulated");
    })
    //create event object
    var event = document.createEvent("MouseEvents");
    //initialize the event object
    event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0,
        false, false, false, false, 0, null);
    btn.dispatchEvent(event);
};


(function addClickListener() {
    var btn = document.getElementById("myBtn");
    EventUtil.addHandler(btn, "click", function(event){
        alert("I'm clicked");
    });
})();