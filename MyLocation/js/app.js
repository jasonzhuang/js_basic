window.MyLocation = window.MyLocation || {};

$(document).ready(function() {
	//TODO:if put the callback after getLocation, seems can't work
	MyLocation.weatherIconMap = [
        'storm', 'storm', 'storm', 'lightning', 'lightning', 'snow', 'hail', 'hail',
        'drizzle', 'drizzle', 'rain', 'rain', 'rain', 'snow', 'snow', 'snow', 'snow',
        'hail', 'hail', 'fog', 'fog', 'fog', 'fog', 'wind', 'wind', 'snowflake',
        'cloud', 'cloud_moon', 'cloud_sun', 'cloud_moon', 'cloud_sun', 'moon', 'sun',
        'moon', 'sun', 'hail', 'sun', 'lightning', 'lightning', 'lightning', 'rain',
        'snowflake', 'snowflake', 'snowflake', 'cloud', 'rain', 'snow', 'lightning'
    ];

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
    //Note: can NOT use $(".queryWeather")[0]
    $(".queryWeather").click(function(e){
      if(MyLocation.Weather === undefined) {
          MyLocation.Weather = new Weather(); 
      }
      //Note:the result is got by AJAX, so you should pass a callback
      MyLocation.Weather.getWeather(MyLocation.location, showWeather);    });}

//TODO:move to MyLocation namespace
function showWeather(result) {
    if(!result) {
        return;
    }
    console.log(result);
    MyLocation.weatherInfo = result;
    constructUI();
}

//the order is very import
function constructUI() {
    //TODO:cache DOM elements
    var weatherDiv = $('#weather'),
        scroller = $('#scroller'),
        location = $('p.location');
    var info = MyLocation.weatherInfo;
    $.each(info, function(index,value) {
        addWeather(index,value);
    });

    // Add the location to the page
    location.html(MyLocation.city+', <b>' + MyLocation.code + '</b>');
    weatherDiv.addClass('loaded');
    
    function addWeather(index, item) {
        console.log(item);        
        var code, date, condition;
        var DEG = 'c';  
        if("day" in item) {//means forecast data
            date = item.day +' <b>'+ item.date.replace('\d+$','')+'</b>';
            condition = item.text + ' <b>'+item.low+'°'+DEG+' / '+item.high+'°'+DEG+'</b>';
        } else { //means current data
            date = "Today";
            condition = item.text + ' <b>'+item.temp+'°'+DEG+'</b>';
        }
        
        code = item.code;
        
        var markup = '<li>'+
            '<img src="img/icons/'+ MyLocation.weatherIconMap[code] +'.png" />'+
            ' <p class="day">'+ date +'</p> <p class="cond">'+ condition +
            '</p></li>';
            
        scroller.append(markup);
    }
    
    var slide = new Slide();
    slide.showSlide(0);
    
    weatherDiv.find('a.previous').click(function(e){
        e.preventDefault();
        slide.showSlide(slide.currentSlide-1);
    });
    
    weatherDiv.find('a.next').click(function(e){
        e.preventDefault();
        slide.showSlide(slide.currentSlide+1);
    });
}

function Slide() {
    var weatherDiv = $('#weather'),
        scroller = $('#scroller');
    var self = this;
    this.currentSlide = 0;
    this.showSlide = function(i) {
        console.log("currentSlide: " + i)
        var items = scroller.find('li');
        if (i >= items.length || i < 0 || scroller.is(':animated')){
            return false;
        }
        
        weatherDiv.removeClass('first last');
        
        if(i == 0){
            weatherDiv.addClass('first');
        }
        else if (i == items.length-1){
            weatherDiv.addClass('last');
        }
        
        scroller.animate({left:(-i*100)+'%'}, function(){
            self.currentSlide = i;//Note:the context here is scroller, so can't use this.currentSlide = i
        });
    }
}