(function RunAll(){
    //getCSSStyles();
    //getStyleSheet();
    testComputedStyle();
    //inspectEle();
})();

/**
 * only return in-line style <div style="padding-top:10px; background-color:#ff0000">
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
    console.dir(document.styleSheets);
    for(var i=0; i<cssFiles.length; i++){
        console.log(cssFiles[i]);
    }
    var innerStyle = document.styleSheets[1];
    console.log(innerStyle);
}

/**
 * return all styles 
 */
function testComputedStyle() {
    var refDiv = document.getElementById("div1");
    var obj = document.defaultView.getComputedStyle(refDiv, null);//CSSStyleDeclaration
    console.dir(obj);
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
