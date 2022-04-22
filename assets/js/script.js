
//api key google AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw

// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw

// parameters location must be specified as latitude and longitude
// keyword "bar" "liquor store" /name/address/place/category/establishments
// opennow returns only places open now
// pagetoken Returns up to 20 results from a previously run search. Setting a pagetoken parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored.

// radius defines distance in meters which to return place results. To specify towards location and a radius parameter prefer showing results withing that circle autocomplete - 50000 meters radius - 1000 meters

// rankby the order in which results are listed: prominence - more valued and distance - closest.

// type  type=hospital only one type can be provided other will be ignored. Supported types: bar/liquor_store

// navigator.geolocation.getCurrentPosition(function(geolocation){console.log(geolocation)})

var long;
var lat;
var url;
var googleData;
var googleApiKey = "AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw";
var urlCock = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var getLocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);

    } else {
        console.log("Geolocation API is not Supported");
    }
};

var getPosition = function (position) {
    lat = position.coords.latitude.toString();
    console.log(lat);
    long = position.coords.longitude.toString();
    console.log(long);
    //    url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=bar&location=${lat}%2C${long}&radius=1500&type=bar&key=${googleApiKey}`;
}
var p = "<p></p>";


$("#random-drink").on("click", function () {
    console.log("Clicked");
    // getLocation();
    // $.get("www.thecocktaildb.com/api/json/v1/1/random.php", function (data) {
    //     console.log(data);
    // })
    fetch(urlCock)
    .then(response => response.json())
    .then(function(data) {
         console.log(data.drinks[0].strDrink)
         console.log(data);
         $("#cocktail-1>div>span.card-title").html(data.drinks[0].strDrink)
         $("#cocktail-1>div>img").attr("src", data.drinks[0].strDrinkThumb)
         $("#cocktail-1>div.card-content>p").html(data.drinks[0].strInstructions);
         for (var i = 1; i <=15;i++){
            //  var ingr = "strIngredient"+i
            //  if (data.drinks[0].ingr){
            //      p.html(data.drinks[0]. + ingr)
            //  }
         }
         p.html("")
         $("#cocktail-1>div.card-content").append
        });



    //    $.get(url, function(data){
    //        console.log('run time')
    //        console.log(data);
    //        googleData = data;
    //        console.log(googleData);
    //    })
})
//  ! read https://api.jquery.com/category/selectors/