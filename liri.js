var twitterkeys = require("./keys.js");
// var spotifycall = require("./random.txt");
var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var command = process.argv[2];
var movie = process.argv[3];



if (command === "this-movie") {

request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {

	if (error) {

		console.log("error");
	}

	else {
		var bodyObject = JSON.parse(body);
		console.log("Title: " + bodyObject.Title, "Year released: " + bodyObject.Year, "Plot: " + bodyObject.Plot, "IMDB rating: " + bodyObject.imdbRating, "Country of origin: " + bodyObject.Country, "Language: " + bodyObject.Language, "Starring: " + bodyObject.Actors, "Website: " + bodyObject.Website);

	}


});

};

if (command === "my-tweets") {

var client = new Twitter({
	consumer_key: twitterkeys.twitterKeys.consumer_key,
	consumer_secret: twitterkeys.twitterKeys.consumer_secret,
	access_token_key: twitterkeys.twitterKeys.access_token_key,
	access_token_secret: twitterkeys.twitterKeys.access_token_secret
});

// console.log(client);

client.get('statuses/user_timeline', function(error, tweets, response) {
	if(error) throw error;
	for (i = 0; i < tweets.length; i++) { 
  console.log(tweets[i].text);  // The favorites. 
  // console.log(response);  // Raw response object. 
};

});

};


if (command === "spotify-this-song"){

var spotifykeys = require("./spotifykey.js");

};