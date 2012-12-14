this.MyLocation = this.MyLocation || {};

function GeoHelper() {
    //initial value is HangZhou location
    var mylocation = {latitude:"30.27", lonitude:"120.15"};
        
    this.init = function(){
        if(navigator.geolocation) {
            navigator.geolocation.watchPosition(updateLocation,
                                            handleLocationError,
                                            {maximumAge:20000});//Setting this option will keep our page updating at regular intervals
        } else {
            log("Your browser not support GeoLocation");
        }
    }
    
    //how to dispatch event? move the google API handler to another js
    var updateLocation = function(position){
        mylocation.latitude = position.coords.latitude;
        mylocation.longitude = position.coords.longitude;
        renderGoogleMap();
        log("lat: " + position.coords.latitude + ", lon: " + position.coords.longitude);
    }
    
    var renderGoogleMap = function(){
        var map = document.getElementById("map");
        var coords = new google.maps.LatLng(mylocation.latitude, mylocation.longitude);
        var options = {
            zoom: 15,
            center: coords,
            mapTypeControl: false,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
        var map = new google.maps.Map(map, options);
        var marker = new google.maps.Marker({
          position: coords,
          map: map,
          title:"You are here!"
      });
    }
    
    this.getPosition = function() {
        return mylocation;
    }
    
    var handleLocationError = function(error){
        switch(error.code){
        case 0:
            log("There was an error while retrieving your location: " +
            error.message);
            break;
        case 1:
            log("The user prevented this page from retrieving a location.");
            break;
        case 2:
            log("The browser was unable to determine your location: " +
            error.message);
            break;
        case 3:
            log("The browser timed out before retrieving the location.");
            break;
        }
    }
    
    var log = this.log = function(msg){
        console.log(msg);
    }
    
}

