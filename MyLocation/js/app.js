window.MyLocation = window.MyLocation || {};

$(document).ready(function() {
	//TODO:if put the callback after getLocation, seems can't work
    MyLocation.location = {};
    MyLocation.renderGoogleMap = function(position){
        MyLocation.location = position;
        var map = $("#map");
        var map = document.getElementById("map");
        var coords = new google.maps.LatLng(position.latitude, position.longitude);
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

    MyLocation.GeoHelper = new GeoHelper();
    MyLocation.GeoHelper.getLocation(MyLocation.renderGoogleMap);
    MyLocation.bindEvents();
});

MyLocation.log = function(msg){
    console.log(msg);
}

MyLocation.bindEvents = function(){
    //can't listen for event like it
    $(".queryWeather")[0].click(function(e){
      if(!MyLocation.Weather) {
          MyLocation.Weather = new Weather(); 
      }
      MyLocation.Weather.getWeather(MyLocation.location);
    });
}


