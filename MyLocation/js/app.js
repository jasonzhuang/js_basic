window.MyLocation = window.MyLocation || {};

$(document).ready(function() {
    MyLocation.GeoHelper = new GeoHelper();
    MyLocation.GeoHelper.getLocation(renderGoogleMap);
    
});

