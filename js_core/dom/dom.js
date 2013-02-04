(function RunAll(){
    //getCSSStyles();
    // traverse();
    //getStyleSheet();
    //testGetComputedStyle();
    //equalCSSDeclaration();
    //setStyleProp();
    //inspectEle();
})();

/**
 * only return in-line style <div style="background-color: lightblue">
 */
function getCSSStyles() {
    var content = document.getElementById("div1");
    console.log(content.style.cssText);
    console.log(content.style);
    var prop = content.style[1];
    console.log(prop);//background-color
    var value = content.style.getPropertyValue(prop);
    console.log(value);//#ff0000
}

/**
 * NOT include in-line style 
 */
function getStyleSheet() {
    var cssFiles = document.styleSheets.length;
    console.log("css file number: " + cssFiles);
    var innerStyle = document.styleSheets[1];
    console.log(innerStyle);
    var rule0 = innerStyle.cssRules[0];//#div1{...}
    console.log(rule0);
    console.log("selectorText: " + rule0.selectorText);//#div1
    console.log("cssText: " + rule0.cssText);
    var style = rule0.style;
    console.log(style.width);//200px
    console.log(style.backgroundColor);//""
}

/**
 * setAttribute will remove all other style properties that may already have been defined in the element's style object.
 */
function setStyleProp(){
    var div3 = document.getElementById("div3");
    div3.setAttribute("style", "border:solid 1px #ff0000;width:200px; height:50px;");
}

/**
 * return all styles 
 */
function testGetComputedStyle() {
    var refDiv = document.getElementById("div1");
    var obj = document.defaultView.getComputedStyle(refDiv, null);//CSSStyleDeclaration
    console.log(obj);
    var backgroundColor = obj.getPropertyValue("background-color");
    console.log(backgroundColor);
    console.log(obj.getPropertyValue("border-top-style"));
}

/**
 * element inspect
 */
function inspectEle(){
    var href = document.getElementById("practise");
    console.log(href.attributes);
    console.log("innerHtml: " + href.innerHTML);
    console.log("outHtml: " + href.outerHTML);
}

function equalCSSDeclaration(){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    console.log(div1.style !== div2.style);
}

function isSupportGETByClassName(){
    if(document.getElementsByClassName) {
        console.log("supported!!!!!");
    }
}

function dynamicAddElement(){
    var content = document.getElementById("div1");
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
