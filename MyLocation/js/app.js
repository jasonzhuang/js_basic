window.MyLocation = window.MyLocation || {};

$(document).ready(function() {
	//TODO:if put the callback after getLocation, seems can't work
    MyLocation.renderGoogleMap = function(position){
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
    

});

