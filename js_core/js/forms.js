function selectTextInput(){
    var textbox = document.forms[0].elements["textbox"];
    EventUtil.addHandler(textbox, "focus", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        target.select();
    });
}

function selection(){
    var selectbox = document.forms[0].location;
    var text = selectbox.options[3].text;
    var value = selectbox.options[3].value;
    alert("text: " + text + " value: " + value);
}

console.log("This is forms.js");

(function delayExecute(){
    var count = 0; 
    for(var i =0; i<1000000000; i++) {
        count++;
    }
})();
