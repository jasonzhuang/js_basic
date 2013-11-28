/**
 * the context of the function used in setTimeout() is always window
 */

window.onload = function(){
    var slide = new Slide();
}

function Slide(){
    //Create images Array
    var imgArr = new Array("images/image-slider-1.jpg",
                            "images/image-slider-2.jpg",
                            "images/image-slider-3.jpg",
                            "images/image-slider-4.jpg",
                            "images/image-slider-5.jpg"
                            );
                            
    var count = imgArr.length;
    this.position = 0;
    var self = this;

    this.setCurrentImage = function() {
        this.banner.src = imgArr[self.position];
        console.log("in setCurrentImage this.position: " + this.position);
        for(var i=0;i<this.navs.length;i++) {
            if(this.position == i) {
                this.navs[i].className = "active";
            } else {
                this.navs[i].className = "";
            }
        }
    };
    
    setTimeout(function changePosition(){
        console.log("in timeout, self.position: " + self.position);
        if (self.position < count) {
            self.setCurrentImage();
            self.position++;/**when use self.position +=1, self.position will be a string, because in the handler, event.target.getAttribute() will return string*/
        } else {
            self.position = 0;
        }
        setTimeout(changePosition, 5000);        
    }, 5000);
    
    
    this.navs = document.getElementById("navs").getElementsByTagName("div");
    this.banner = document.getElementById("banner");
    
    /**
     * Note: in the eventListener handler, "this" is point to navs[i], so should store the Slide instance to "self"
     */
    for(var i = 0; i < this.navs.length; i++) {
        this.navs[i].setAttribute("ref", i);
        this.navs[i].addEventListener("click", function(event){
            var ref = event.target.getAttribute("ref");//Note: here will return string, Not we want
            self.position = parseInt(ref,10);
            console.log("in handler, self.position: "+ self.position);
            self.changeStyle(event.target);
            self.banner.src = imgArr[ref];
        }, false);
    }
    
    this.changeStyle = function(divItem){
        for (var i=0; i<this.navs.length;i++) {
            this.navs[i].className = '';
            divItem.className = "active";
        }
    }
}