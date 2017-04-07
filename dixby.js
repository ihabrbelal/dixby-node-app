var key = require('./key.js');
var client = key.client;

// console.log(client);
// var config = key.config;
// var client = new twitter(config);

// link installed nodejs packages, twitter, spotify, request
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var command = process.argv[2];
var keyword = process.argv[3];
// test the require method
// console.log(key.twitterKeys.consumer_key);

// if statemnt to excute the commands (my-tweets, spotify-this-song, movie-this)

// movie-this to show info of the movies selected
if (command === "movie-this") {

    if (keyword === undefined)
        keyword = "Mr. nobody";


    request("http://www.omdbapi.com/?t=" + keyword + "&y=&plot=short&r=json", function(error, response, body) {

        var output = function() {
            console.log("here is the info we found for ", keyword);
            console.log('Title: ', JSON.parse(body).Title);
            console.log('Year: ', JSON.parse(body).Year);
            console.log('imdb Rating: ', JSON.parse(body).imdbRating);
            console.log('Country: ', JSON.parse(body).Country);
            console.log('Language: ', JSON.parse(body).Language);
            console.log('Plot: ', JSON.parse(body).Plot);
            console.log('Rotten Tomato Rating: ', JSON.parse(body).Ratings[2].Value);
            console.log('URL: ', JSON.parse(body).Website);
        }

        if (!error && response.statusCode === 200)
            output();
        else
            console.log("error");

    });
}

// grab data from spotify api by nodejs
if (command === "spotify-this-song") {
    if (keyword === undefined)
        keyword = "The Sign";
    const find = require('spotify-find')

    find({ q: keyword, type: 'track' }).then(function(res) {
        // console.log(res);
        var n = res.tracks.items;
        console.log('Song\s  Name: ', n[0].name);

        for (var i = 0; i < n.length; i++) {

            // console.log('Song\s  Name: ', n[i].name);
            console.log('Album\'s  Name: ', n[i].album.name);

            console.log('Artist Name: ', n[i].artists[0].name);
            console.log('Preview url: ', n[i].preview_url);

        }


    })

}


// get the latest 20 tweets thru twitter api nodejs
if (command === "my-tweets") {
    // var options: { count: 100 };
    client.get('statuses/user_timeline', { count: 19 }, function(error, tweet, response) {
        if (!error) {
            for (var i = 0; i < tweet.length; i++) {
                console.log('My latest tweets: ' + (tweet)[i].text);

            }
        }
    });
}
