/**
 * the context of the function used in setTimeout() is always window
 */

window.onload = function(){
    var slide = new Slide();
    //slide.slidingImages();
}

/**
 * TODO:
 * when click the specific image, the loop start from 0 again
 */
function Slide(){
    //Create images Array
    this.imgArr = new Array("images/image-slider-1.jpg",
                            "images/image-slider-2.jpg",
                            "images/image-slider-3.jpg",
                            "images/image-slider-4.jpg",
                            "images/image-slider-5.jpg"
                            );
                            
    this.count = this.imgArr.length;
    this.position = 0;
    var self = this;

    this.setCurrentImage = function() {
        this.banner.src = this.imgArr[this.position];
        for(var i=0;i<this.navs.length;i++) {
            if(this.position == i) {
                this.navs[i].className = "active";
            } else {
                this.navs[i].className = "";
            }
        }
    };
    
    setTimeout(function(){
        if (self.position < self.count) {
            self.setCurrentImage();
            self.position += 1;
        } else {
            self.position = 0;
        }
        setTimeout(arguments.callee, 3000);        
    }, 3000);
    
/*
    this.slidingImages = function(){
        if (self.position < self.count) {
            self.setCurrentImage();
            self.position += 1;
        } else {
            self.position = 0;
        }
        setTimeout(self.slidingImages, 3000);
    };*/

    
    this.navs = document.getElementById("navs").getElementsByTagName("div");
    this.banner = document.getElementById("banner");
    
    /**
     * Note: in the eventListener handler, "this" is point to navs[i], so should store the Slide instance to "self"
     */
    for(var i = 0; i < this.navs.length; i++) {
        this.navs[i].setAttribute("ref", i);
        this.navs[i].addEventListener("click", function(event){
            var ref = event.target.getAttribute("ref");
            self.changeStyle(event.target);
            //console.log(self.navs);//========can't use this.navs==========
            self.banner.src = self.imgArr[ref];
        }, false);
    }
    
    this.changeStyle = function(divItem){
        for (var i=0; i<this.navs.length;i++) {
            if(divItem === this.navs[i]) {
                this.navs[i].className = "active";
                console.log("current show image: " + divItem.getAttribute("ref"));
            } else {
                this.navs[i].className = '';
            }
        }
        this.position = divItem.getAttribute("ref");
    }
}