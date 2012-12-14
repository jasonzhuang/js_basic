this.MyLocation = this.MyLocation || {};

function loadDemo(){
    MyLocation.GeoHelper = new GeoHelper();
    MyLocation.GeoHelper.init();
}

window.addEventListener("load", loadDemo, true);
