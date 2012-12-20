function Weather(){
    var APPID = 'Nq3xMn7k';     // Your Yahoo APP id
    var DEG = 'c';      // c for celsius, f for fahrenheit
    // Yahoo's PlaceFinder API http://developer.yahoo.com/geo/placefinder/
    // We are passing the R gflag for reverse geocoding (coordinates to place name)
    var geoAPI = 'http://where.yahooapis.com/geocode?location='+ "LAT" + ',' + "LON" + '&flags=J&gflags=R&appid='+APPID;
    
    // Forming the query for Yahoo's weather forecasting API with YQL
    // http://developer.yahoo.com/weather/
    
    var wsql = 'select * from weather.forecast where woeid=WID and u="'+DEG+'"',
        weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent(wsql)+'&format=json&callback=?',
        code, city, results, woeid;
    
    
    
    this.getWeather = function(position, fn){
            if(!position || !position.latitude || !position.longitude) {
                throw new Error("position is null");
            }
            var items = [];
            
            geoAPI = geoAPI.replace("LAT", position.latitude).replace("LON", position.longitude);
            console.log(geoAPI);
            
            $.getJSON(geoAPI, function(r){
                if(r.ResultSet.Found == 1){
                    results = r.ResultSet.Results;
                    city = results[0].city;
                    code = results[0].statecode || results[0].countrycode;
                    //TODO:Could use global data?
                    MyLocation.city = city;
                    MyLocation.code = code;
                    console.log("city:" + city + ", code: " + code);            
                    // This is the city identifier for the weather API
                    woeid = results[0].woeid;
                    $.getJSON(weatherYQL.replace('WID',woeid), function(r){
                       if(r.query && r.query.count == 1){
                           // current day
                           var item = r.query.results.channel.item.condition;
                           items.push(item);
                           
                           if(!item){
                                MyLocation.log("We can't find weather information about your city!");
                                MyLocation.log("%s, %s; woeid: %d", city, code, woeid);
                                fn(false);
                           }
                           
                           for (var i=0;i<2;i++){
                                item = r.query.results.channel.item.forecast[i];
                                items.push(item);
                           }
                           //invoke callback
                           fn(items);
                       } else {
                           MyLocation.log("Error retrieving weather data!");
                       }
                    });
                }
                
                
            }).error(function(){
                MyLocation.log("Your browser does not support CORS requests!");
            });
        }
}