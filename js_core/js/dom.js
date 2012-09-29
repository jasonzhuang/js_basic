(function RunAll(){
    // inspect();
     //getCSSStyles();
    // traverse();
    // createProxy();
    //isSupportGEByClassName();
    //getStyleSheet();
    testGetComputedStyle();
})();

console.log("This is dom.js");

function isSupportGEByClassName(){
    if(document.getElementsByClassName) {
        console.log("suppored!!!!!");
    }
}

function inspectNodeType(){
    var contentElement = document.getElementById("list");
    var fistChild = contentElement.childNodes[0];
    if(contentElement.nodeType == 1) {
        console.log("Node is an element");
        console.log(contentElement.ownerDocument);
        console.log(fistChild.nodeName);
        console.log(fistChild.nextSibling);
        console.log(fistChild.previousSibling);
    }
}

function dynamicAddElement(){
    var content = document.getElementById("content");
    var fragment = document.createDocumentFragment();
    var ul= document.getElementById("list");
    var li = null;
    for (var i=3; i<5;i++) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Item " + (i+1)));
        fragment.appendChild(li);
    }
    
    ul.appendChild(fragment);
}

//dynamic load script
var code = "(function sayHi(){alert('hi');})()";
function loadScript(code) {
    console.log("execute...");
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    }catch (ex) {
        script.text = code;
    }
    document.body.appendChild(script);
};

//dynamic load css
function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}

//inspect DOM2 and DOM3
function inspect(){
    var supportDOM2Core = document.implementation.hasFeature("Core", "2.0");
    var supperDOM2Views = document.implementation.hasFeature("Views", "2.0");
    var supportDOM2XML = document.implementation.hasFeature("XML", 2.0);
    var supportDOM2CSS2 = document.implementation.hasFeature("CSS2", "2.0");
    console.log("supportDOM2Core: " + supportDOM2Core);
    console.log("supperDOM2Views: " + supperDOM2Views);
    console.log("supportDOM2XML: " + supportDOM2XML);
    console.log("supportDOM2CSS2: " + supportDOM2CSS2);
}

//<div id="content" style="font-family: Arial;padding-top: 10px">HHH</div>
function getCSSStyles() {
    var content = document.getElementById("content");
    console.log(content.style.cssText);//font-family: Arial;padding-top: 10px
    var prop = content.style[0];//font-family
    var value = content.style.getPropertyValue(prop);//Arial
}

function traverse() {
    var content = document.getElementById("content");
    var filter = function(node) {
        return (node.tagName.toLowerCase() == "li") ? NodeFilter.FILTER_ACCEPT:Array.FILTER_SKIP;
    }
    var iterator = document.createNodeIterator(content, NodeFilter.SHOW_ELEMENT,filter, false);
    var node = iterator.nextNode();
    while(node!==null) {
        console.log(node.tagName);
        node = iterator.nextNode();
    }
}

function createProxy() {
    console.log(arguments.callee.caller);
    if(typeof arguments.callee.proxyName !="string") {
        var proxy = {http:"http//jason.com"};
        arguments.callee.proxyName = "jason";
        return proxy;
    }
    return {http:"http//jason.com"};
}

function getStyleSheet() {
    var cssFiles = document.styleSheets.length;
    console.log("css file number: " + cssFiles);
    var innerStyle = document.styleSheets[2];
    console.log(innerStyle instanceof CSSStyleSheet);
    var rule = innerStyle.cssRules[0];
    console.log("selectorText: " + rule.selectorText);//className
    console.log(rule instanceof CSSStyleRule);
    var style = rule.style;
    console.log(style instanceof CSSStyleDeclaration);
    style.color = "white";
}

function testGetComputedStyle() {
    var RefDiv = document.getElementById("content");
    var obj = document.defaultView.getComputedStyle(RefDiv, null);//CSSStyleDeclaration
    var backgroundColor = obj.getPropertyValue("background-color");
    console.log(backgroundColor);
    var paddingTop = obj.getPropertyValue("padding-top");
    console.log("padding-top: " + paddingTop);
    
}
