$(document).ready(function () {
    console.log("ready")
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

    
    
    var location = [];
    var keyword = "liquor_store"; // or liquor store
    var radius = "1000";
    var type = 'liquor_store'; // should be bar or liquor_store - as default
    var googleApiKey = "AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw";
    // var l1 = (26.1619712).toString();
    // var l2 = (-80.1538048).toString();
    var bigData;
   navigator.geolocation.getCurrentPosition(function(geolocation){
       console.log(geolocation);
       bigData = geolocation;
    return bigData;
})
    
    var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${keyword}&location=${latitude}%2C${longitude}&radius=${radius}&type=${type}&key=${googleApiKey}`;
    
    // var axios = require('axios');
    
    // navigator.geolocation.getCurrentPosition(function(geolocation){console.log(geolocation)})
    // var config = {
    //   method: 'get',
    //   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=bar&keyword=bar&key=AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw',
    //   headers: { }
    // };

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    //result contains an array of places

})