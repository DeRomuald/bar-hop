
//api key google AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw

// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw

// parameters location must be specified as latitude and longitude
// keyword "bar" "liquor store" /name/address/place/category/establishments
// opennow returns only places open now
// pagetoken Returns up to 20 results from a previously run search. Setting a pagetoken parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored.

// radius defines distance in meters which to return place results. To specify towards location and a radius parameter prefer showing results withing that circle autocomplete - 50000 meters radius - 1000 meters

// rankby the order in which results are listed: prominence - more valued and distance - closest.

// type  type=hospital only one type can be provided other will be ignored. Supported types: bar/liquor_store

// var long;
// var lat;
// var url;
// var googleData;
// var googleApiKey = "AIzaSyDLf-G0K6XFv8PvM7171bTHYQe7BHieNEw";
// navigator.geolocation.getCurrentPosition(function(geolocation){console.log(geolocation)})
// var getLocation = function () {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(getPosition);

//     } else {
//         console.log("Geolocation API is not Supported");
//     }
// };

// var getPosition = function (position) {
//     lat = position.coords.latitude.toString();
//     // console.log(lat);
//     long = position.coords.longitude.toString();
//     // console.log(long);
// }
//  ! read https://api.jquery.com/category/selectors/
//link for random cocktail
var urlRandomCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
// link for cocktail database
var urlCocktailByName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// reference to modal yes btn click to store local storage not to ask user from the same browser again.
var yesBtnEl = $("#yes-btn");

// get a random drink data from api call
var randomDrink = function (data) {
    $("#recipes").empty();
    var drink = data.drinks[0];
    var newSurp = $('<div id="surp-recipe" class="col s12 m4 offset-m4"><div class="card" id="cocktail-surp"><div class="card-image"><img src="' + drink.strDrinkThumb + '" /><span class="card-title black-text">' + drink.strDrink + '</span></div><div class="card-content"><ol class="ingredients-surp"></ol><p class="instruction-surp">' + drink.strInstructions + '</p></div></div><div>');
    // to iterate through data of ingridients and measure
    $("#recipes").append(newSurp);
    // we need function list ingredients
    for (var i = 1; i <= 15; i++) {
        var ingredient = 'strIngredient' + i;
        var measure;
        // if api set measure to null
        if (drink['strMeasure' + i] == null) {
            measure = '';
        } else {
            measure = drink['strMeasure' + i]
        }
        // if we have ingredient and it not equal to empty string
        if (drink[ingredient] != null && drink[ingredient] != "") {
            // create a new li with numbered ingredient and measure
            $(".ingredients-surp").append("<li class='ingredient-surp-" + i + "'>" + measure + " " + drink[ingredient] + "</li>")
        }
    }
}
// search for cocktail in input area
var listOfCocktails = function (data) {
    $("#recipes").empty();
    // add if data not exists give a message to enter another drink
    // change for modal later
    if (data.drinks == null) {
        $('#modal-no-data').modal();
        // start when the page are ready
        $('#modal-no-data').modal("open");
    } else {
        for (var i = 0; i < data.drinks.length; i++) {
            var firstCock = data.drinks[i];
            // create cards with picture and a recipe
            var item = $('<div id="recipe-' + i + '" class="col s12 m4"><div class="card" id="cocktail-' + i + '"><div class="card-image"><img src="' + firstCock.strDrinkThumb + '" /><span class="card-title black-text">' + firstCock.strDrink + '</span></div><div class="card-content"><ol class="ingredients"></ol><p class="instruction">' + firstCock.strInstructions + '</p></div></div></div>')
            $("#recipes").append(item);
            //  we need iterate for cocktail ingridients in here
            // function list ingredients
            for (var j = 1; j <= 15; j++) {
                var ingredient = 'strIngredient' + j;
                var classIngredientNum = "#cocktail-" + i + ">div>.ingredients";
                var measure;
                if (firstCock['strMeasure' + j] == null) {
                    measure = '';
                } else {
                    measure = firstCock['strMeasure' + j]
                }
                if (firstCock[ingredient] != null && firstCock[ingredient] != '') {
                    $(classIngredientNum).append("<li class='ingredient" + j + "'>" + measure + " " + firstCock[ingredient] + "</li>")
                }
            }
        }
    }
}

// ! to open modal on the loading page. uncomment below !!
$(document).ready(function () {
    // TODO: if store value is not equal to yes then run modal. If value Yes then don't ask the person to answer it again. ✅
    if (localStorage.getItem("answer") === 'yes') {
        // do nothing
        return;
    } else {
        // start modal without closing click anywhere
        $('#modal-age-check').modal({ dismissible: false });
        // start when the page are ready
        $('#modal-age-check').modal("open");
        yesBtnEl.on("click", function () {
            localStorage.setItem('answer', 'yes');
        })
    }
});
// gives random drink on click
$("#random-drink").on("click", function () {
    $.get(urlRandomCocktail, randomDrink);
});

/*
The fetch code will look like that
$("#random-drink").on("click", function () {
    fetch(urlRandomCocktail)
        .then(response => response.json())
        .then(randomDrink);
});
*/

// do display cocktail search by its name
$("#search-bar").submit(function (event) {
    event.preventDefault();
    // information from user's input
    var input = $("#cocktail-name-input").val()

    // clean the cocktail search bar after submit
    $("#cocktail-name-input").val("");

    // create a api ling by adding a name of cocktail in link for search keyword.
    var searchUrl = urlCocktailByName + input;
    // getting data 
    $.get(searchUrl, listOfCocktails);

    /*
     The fetch code will look like that
     fetch(searchUrl)
         .then(response => response.json())
         .then(listOfCocktails)
    */
});

