function MYQuery(){
    this.defaults = {
        name: "jason",
        age: 25
    };
    
    this.getTabs = function(){
        console.log("this is getTabs body");
        return ["tabs1","tabs2"];
    };
    
    this.tabs = this.getTabs();
}

(function JASON(){
    slides = ["slide1", "slide2"];
})();

