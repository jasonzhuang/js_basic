window.MyLocation = window.MyLocation || {};

function GeoHelper() {
    var mylocation = {latitude:"20", longitude:"110"};
    var fn;
    this.getLocation = function(callback){
        fn = callback;
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(updateLocation,
                                            handleLocationError,
                                            {maximumAge:20000});//Setting this option will keep our page updating at regular intervals
        } else {
            MyLocation.log("Your browser not support GeoLocation");
        }
    }
    
    //TODO:dispatch event or callback
    var updateLocation = function(position){
        mylocation.latitude = position.coords.latitude;
        mylocation.longitude = position.coords.longitude;
        fn(mylocation);
        MyLocation.log("lat: " + position.coords.latitude + ", lon: " + position.coords.longitude);
    }
    
    var handleLocationError = function(error){
        switch(error.code){
        case 0:
            MyLocation.log("There was an error while retrieving your location: " +
            error.message);
            break;
        case 1:
            MyLocation.log("The user prevented this page from retrieving a location.");
            break;
        case 2:
            MyLocation.log("The browser was unable to determine your location: " +
            error.message);
            break;
        case 3:
            MyLocation.log("The browser timed out before retrieving the location.");
            break;
        }
    }
}

