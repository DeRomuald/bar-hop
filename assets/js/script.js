
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
var cocktailNameUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
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
    // url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=bar&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw`;
}



//  ! read https://api.jquery.com/category/selectors/

var randomDrink = function (data) {
    $("#recipes").empty();
    // console.log(data.drinks[0].strDrink)
    // console.log(data);
    var drink = data.drinks[0];
    var newSurp = $('<div id="surp-recipe" class="col s12 m4"><div class="card" id="cocktail-surp"><div class="card-image"><img src="' + drink.strDrinkThumb + '" /><span class="card-title black-text">' + drink.strDrink + '</span></div><div class="card-content"><ol class="ingredients-surp"></ol><p class="instruction-surp">' + drink.strInstructions + '</p></div></div><div>');
    // to iterate through data of ingridients and measure
    $("#recipes").append(newSurp);
    // $(".ingredients-surp").empty();
    // we need function list ingredients
    // listIngrediences(drink,"surp");

    for (var i = 1; i <= 15; i++) {
        var ingredient = 'strIngredient' + i;
        // if we have ingredient and it not equal to empty string
        if (drink[ingredient] != null && drink[ingredient] != "") {
            // create a new li with numbered ingredient and measure
            $(".ingredients-surp").append("<li class='ingredient-surp-" + i + "'>" + drink[ingredient] + " " + drink["strMeasure" + i] + "</li>")
        }

    }


}
var listIngrediences = function (drink) { //drink is data.drinks[i]
    for (var j = 1; j <= 15; j++) {
        var ingredient = 'strIngredient' + j;
        var classIngredientNum = ".ingredients"+j;
        if (drink[ingredient] != null && drink[ingredient] != '') {
            $(".ingredients").append("<li class='ingredient" + j + "'>" + drink[ingredient] + " " + drink["strMeasure" + j] + "</li>")
        }
    }
}


$("#random-drink").on("click", function () {
    fetch(urlCock)
        .then(response => response.json())
        .then(randomDrink);
});
// do display cocktail search by its name
$("#find-recipe-btn").on("click", function () {
    $("#recipes").empty();
    console.log("clicked")
    // information from user's input
    var input = $("#cocktail-name-input").val()
    $("#cocktail-name-input").val("");
    // console.log(input);
    // create a api ling by adding a name of cocktail in link for search keyword.
    var searchUrl = cocktailNameUrl + input;
    // getting data 
    fetch(searchUrl)
        .then(response => response.json())
        .then(function (data) {
            for (var i = 0; i < data.drinks.length; i++) {
                console.log(data);
                var firstCock = data.drinks[i];
                console.log(firstCock);
                // create cards with picture and a recipe
                var item = $('<div id="recipe-' + i + '" class="col s12 m4"><div class="card" id="cocktail-' + i + '"><div class="card-image"><img src="' + firstCock.strDrinkThumb + '" /><span class="card-title black-text">' + firstCock.strDrink + '</span></div><div class="card-content"><ol class="ingredients"></ol><p class="instruction">' + firstCock.strInstructions + '</p></div></div></div>')
                $("#recipes").append(item);
                // ! we need iterate for cocktail ingridients in here
                // function list ingredients
                for (var j = 1; j <= 15; j++) {
                    var ingredient = 'strIngredient' + j;
                    var classIngredientNum = "#cocktail-"+i+">div>.ingredients";
                    if (firstCock[ingredient] != null && firstCock[ingredient] != '') {
                        $(classIngredientNum).append("<li class='ingredient" + j + "'>" + firstCock[ingredient] + " " + firstCock["strMeasure" + j] + "</li>")
                    }
                }
            }

        })
});

