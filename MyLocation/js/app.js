window.MyLocation = window.MyLocation || {};

$(document).ready(function() {
    MyLocation.GeoHelper = new GeoHelper();
    MyLocation.GeoHelper.getLocation(renderGoogleMap);
    
    function renderGoogleMap(position){
        var map = $("#map");
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
});

