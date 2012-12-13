$(document).ready(function() {
	var lat = 48.8719414772291, lon = 2.3291015625, mq, pano_options, map_options, map;
	var mapDiv = document.getElementById('map'),markersArray = [], wikiArray = [], infowindow = new google.maps.InfoWindow(),
	places_types = ['store','airport','amusement_park','aquarium','art_gallery','atm','bar','bus_station','cafe','casino','food','grocery_or_supermarket',
	'lodging','museum','night_club','park','restaurant','spa','stadium','subway_station','train_station','zoo','natural_feature',
	'point_of_interest'
	];
	var panoramioPhotosView = true, googlePlacesView = false, wikiView = false;
	map_options = {
		center: new google.maps.LatLng(lat, lon),
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(mapDiv, map_options);
	var iconType = {};
	for(var i=0;i<places_types.length;i++) {
		iconType[places_types[i]] = "markers/"+places_types[i]+".png";
	}
	function clearOverlays() {
		if (markersArray)
		{
			var markersArray_len = markersArray.length, i;
			for (i = 0; i < markersArray_len; i++) {
				markersArray[i].setMap(null);
			}
		}
	}
	function clearWiki() {
		if (wikiArray)
		{
			var wikiArray_len = wikiArray.length, i;
			for (i = 0; i < wikiArray_len; i++) {
				wikiArray[i].setMap(null);
			}
		}
	}
	function showOverlays() {
		if (markersArray)
		{
			var markersArray_len = markersArray.length, i;
			for (i = 0; i < markersArray_len; i++) {
				markersArray[i].setMap(map);
			}
		}
	}
	function showWiki() {
		if (wikiArray)
		{
			var wikiArray_len = wikiArray.length, i;
			for (i = 0; i < wikiArray_len; i++) {
				wikiArray[i].setMap(map);
			}
		}
	}
	// check for Geolocation support
	function getLocation(callback)
	{
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				callback();
				markersNearby(lat,lon);
				getNearbyWiki(lat,lon);
				googlePlacesView = true;
				wikiView = true;
				$('input#places').attr('checked',true);
				$('input#wiki').attr('checked',true);
			},
			function(error) {
				var error_msg = '';
				switch(error.code)
				{
					case 0:
					error_msg = 'Unknown error';
					break;
					case 1:
					error_msg = 'Permission denied';
					break;
					case 2:
					error_msg = 'Position unavailable (error response from locaton provider)';
					break;
					case 3:
					error_msg = 'Timed out';
					break;
				}
				alert('Error occurred. '+error_msg);
				lat = 48.8719414772291;
				lon = 2.3291015625;
			});
		}
		else {
			lat = 48.8719414772291;
			lon = 2.3291015625;
			callback();
			alert('Geolocation is not supported for this Browser/OS version yet.');
		}
	}
	var panoramioLayer = new google.maps.panoramio.PanoramioLayer(), geocoder = new google.maps.Geocoder();
	panoramioLayer.setMap(map);
	getLocation(initApp);
	function initApp()
	{
		map.setCenter(new google.maps.LatLng(lat, lon));
	}
	function addMarker(place)
	{
		var rozmiar = new google.maps.Size(33,40);
		var punkt_startowy = new google.maps.Point(0,0);
		var punkt_zaczepienia = new google.maps.Point(16,16);
		var icon1 = new google.maps.MarkerImage(iconType[place.types[0]]?iconType[place.types[0]]:iconType[place.types[1]],rozmiar,punkt_startowy,punkt_zaczepienia);
		var opcjeMarkera =
		{
			position: place.geometry.location,
			map: map,
			icon: icon1
		}
		var marker = new google.maps.Marker(opcjeMarkera);
		markersArray.push(marker);
		google.maps.event.addListener(marker,"click",function()
		{
			infowindow.setContent('<h2>'+place.name+'</h2>'+place.vicinity);
			infowindow.open(map,marker);
		});
	}
	function addMarkerWiki(article)
	{
		var rozmiar = new google.maps.Size(24,24);
		var punkt_startowy = new google.maps.Point(0,0);
		var punkt_zaczepienia = new google.maps.Point(12,12);
		var icon1 = new google.maps.MarkerImage('img/wikipedia.png',rozmiar,punkt_startowy,punkt_zaczepienia);
		var opcjeMarkera =
		{
			position: new google.maps.LatLng(parseFloat(article.lat),parseFloat(article.lng)),
			map: map,
			icon: icon1
		}
		var marker = new google.maps.Marker(opcjeMarkera);
		wikiArray.push(marker);
		google.maps.event.addListener(marker,"click",function()
		{
			infowindow.setContent('<h2><a href="'+article.url+'">'+article.title+'</a></h2>');
			infowindow.open(map,marker);
		});
	}
	function markersNearby(lat,lng)
	{
		clearOverlays();
		var request = {
			location: new google.maps.LatLng(lat,lng),
			radius: '1000',
			types: places_types
		};
		service = new google.maps.places.PlacesService(map);
		service.search(request, getNearbyResults);
	}
	function getNearbyResults(results, status, pagination) {
		clearOverlays();
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			for(var i = 0; i < results.length; i+=1) {
				addMarker(results[i]);
			}
		}
		else
		{
			if(status == google.maps.places.PlacesServiceStatus.ERROR) {
				alert('There was a problem contacting the Google servers.');
			}
			else if(status == google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
				alert('This request was invalid.');
			}
			else if(status == google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
				alert('The webpage has gone over its request quota. Google places api limitations.');
			}
			else if(status == google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
				alert('The webpage is not allowed to use the PlacesService.');
			}
			else if(status == google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
				alert('The PlacesService request could not be processed due to a server error. The request may succeed if you try again.');
			}
			else if(status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
				alert('Zero results.');
			}
		}
	}
	//(lon-diff, lon+diff, lat-diff, lat+diff);
	function getNearbyWiki(lat,lon) {
		$.ajax({
			url: 'http://api.wikilocation.org/articles?lat='+lat+'&lng='+lon+'&radius=5000&jsonp=addPoi&callback=?',
			dataType: 'json',
			jsonpCallback: 'addPoi',
			cache: false,
			success: function(data) {
				var data_len = data.articles.length;
				for(var i = 0; i < data_len; i+=1)
				{
					addMarkerWiki(data.articles[i]);
				}
			}
		});
	}

	$('input#photos').change(function() {
		if(panoramioPhotosView==true) {
			panoramioLayer.setMap(null);
			$(this).attr('checked',false);
			panoramioPhotosView = false;
		}
		else {
			panoramioLayer.setMap(map);
			$(this).attr('checked',true);
			panoramioPhotosView = true;
		}
	});
	$('input#places').change(function() {
		if(googlePlacesView==true) {
			clearOverlays();
			$(this).attr('checked',false);
			googlePlacesView = false;
		}
		else {
			showOverlays();
			$(this).attr('checked',true);
			googlePlacesView = true;
		}
	});
	$('input#wiki').change(function() {
		if(wikiView==true) {
			clearWiki();
			$(this).attr('checked',false);
			wikiView = false;
		}
		else {
			showWiki();
			$(this).attr('checked',true);
			wikiView = true;
		}
	});
	$('#info').click(function() {
		$('#info_div').toggle();
		return false;
	});
	$('#info_div').click(function() {
		if($(this).css('display')=='block') {
			$(this).hide();
		}
		return false;
	});
	//search places by input
	$('#search_place').on('click',function() {
		var place = $('#place').val();
		geocoder.geocode( {'address': place}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var geom_loc =results[0].geometry.location;
				map.setCenter(geom_loc);
				markersNearby(geom_loc.lat(),geom_loc.lng());
				getNearbyWiki(geom_loc.lat(),geom_loc.lng());
				googlePlacesView = true;
				wikiView = true;
				$('input#places').attr('checked',true);
				$('input#wiki').attr('checked',true);
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
		return false;
	});
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(new google.maps.LatLng(lat, lon));
	});

});
