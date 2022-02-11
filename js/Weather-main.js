($(document).ready(function () {
    function markify(result, blerb) {
        $('.mapboxgl-marker').remove()
        let marker = new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map)
        if (!blerb) {
            return
        }
        let restaurantPopup = new mapboxgl.Popup()
            .setHTML(blerb)
        marker.setPopup(restaurantPopup);
    }
    function appendify(target, arr, index) {
        if (index === 0) {
            target.html("")
        }
        let unix_timestamp = arr.dt;
        let date = new Date(unix_timestamp * 1000);
        date = new Date(unix_timestamp * 1000);
        console.log(date)
        let year = date.getFullYear();
        let month = date.getMonth();
        let dayNum = date.getDate();
        target.append(`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Date: ${year}-${month}-${dayNum}</h5>
    <h6 class="card-subtitle mb-2">Daytime feels like: ${arr.feels_like.day}</h6>
    <h6 class="card-subtitle mb-2">Nighttime feels like: ${arr.feels_like.night}</h6>
    <div class="card-text">Daytime tempature: ${arr.temp.day}</div>
    <div class="card-text">Nighttime tempature: ${arr.temp.night}</div>
    <div class="card-text">Min tempature: ${arr.temp.min}</div>
    <div class="card-text">Max tempature: ${arr.temp.max}</div>
    <div class="card-text">Wind speed: ${arr.wind_speed}</div>
    <div class="card-footer"><img src="http://openweathermap.org/img/wn/${arr.weather[0].icon}.png"</div>
    <a href="https://en.wikipedia.org/wiki/Comic_Sans" class="card-link">comic sans wiki</a>
  </div>
</div>`)
    }
    function getify(lat, long, key) {
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${key}&units=imperial`).done(function (results) {
            console.log(results)
            let timeZone = results.timezone
            results.daily.forEach(function (day, index) {

                if (index > 4) {
                    return
                }
                appendify($("#weatherCard"), day, index)
            })
        })
    }
    mapboxgl.accessToken = WES_MAPBOX_API_KEY;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });
    geocode("glen Burnie MD", WES_MAPBOX_API_KEY).then(function (result) {
        map.setCenter(result)
    })

    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
    geocoder.addTo(map)
    map.on("click", function (e) {
        console.log(e.lngLat)
        markify(e.lngLat)
        getify(e.lngLat.lat, e.lngLat.lng, WES_WEATHERAPI_KEY)
    })
    geocoder.on("result", function (e) {
        console.log(e)
        getify(e.result.center[1], e.result.center[0], WES_WEATHERAPI_KEY)
    })
}))