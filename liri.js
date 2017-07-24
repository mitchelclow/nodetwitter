var twitterkeys = require("./keys.js");
var spotifykeys = require("./spotifykey.js");
// var spotifycall = require("./random.txt");
var request = require("request");
var movie = process.argv[2];

request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {

	if (error) {

		console.log("error");
	}

	else {
		var bodyObject = JSON.parse(body);
		console.log("Title: " + bodyObject.Title, "Year released: " + bodyObject.Year, "Plot: " + bodyObject.Plot, "IMDB rating: " + bodyObject.imdbRating, "Country of origin: " + bodyObject.Country, "Language: " + bodyObject.Language, "Starring: " + bodyObject.Actors, "Website: " + bodyObject.Website);

	}


});