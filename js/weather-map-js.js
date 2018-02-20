(function () {
    "use strict";
    
    console.log('hello');

    var ajaxForecast = $.get("http://api.openweathermap.org/data/2.5/forecast?id=4726206", {
        APPID: "2c2d07a95167bb29b02bf086b161b7d8",
        id:     4726206,
        // lat: $('#lat').val(),
        // lon: $('#long').val(),
        units: "imperial",
        cnt: 3
    });
    ajaxForecast.done(function (response) {
        console.log(response);});
        
    function buildWeatherHTML() {
        var weatherHTML = '';
        for (var i = 0; i <= i; i++) {
            weatherHTML += "<div>";
            weatherHTML += "<div>";

        }

    }        


}());
