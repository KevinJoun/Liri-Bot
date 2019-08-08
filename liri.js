//Setting all require variables.
require("dotenv").config();
var moment = require('moment');
var axios = require('axios');
var fs = require('fs');
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//variables for CLI arguments.
var command = process.argv[2]
var search = process.argv.slice(3).join(" ");

//function to run the application.
function liri() {
    //if statement to check for user command and run an api search based off command.
    if (command == 'concert-this') {
        var URL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"
        axios.get(URL).then(function (response) {
            var results = response.data
            for (var i = 0; i < results.length; i++) {
                var eventDate = moment(results[i].datetime).format('MM/DD/YYYY')
                console.log(
                    'Venue Name: ' + results[i].venue.name +
                    '\nVenue Location: ' + results[i].venue.city + ', ' + results[i].venue.region +
                    '\nDate of Event: ' + eventDate + '\n==========================='
                )
            }
        });
    } else if (command == 'spotify-this-song') {
        //if the search variable is null (no search input was entered by the user), then it will assign "the sign ace of base" as the search variable. This essentially is the default search option if no value is entered.
        if (!search) {
            search = 'the sign ace of base'
        }
        spotify.search({
            type: 'track',
            query: search
        }).then(function (response) {
            var results = response.tracks.items
            console.log(
                'Artist(s): ' + results[0].artists[0].name +
                '\nSong Name: ' + results[0].name +
                '\nSpotify URL: ' + results[0].external_urls.spotify +
                '\nAlbum: ' + results[0].album.name
            )
        }).catch(function (err) {
            console.log(err)
        });
    } else if (command == 'movie-this') {
        var URL = 'http://www.omdbapi.com/?apikey=trilogy&t=' + search
        axios.get(URL).then(function (response) {
            results = response.data
            console.log(
                'Title: ' + results.Title +
                '\nRelease Year: ' + results.Year +
                '\nIMDB Rating: ' + results.Ratings[0].Value +
                '\nRotten Tomatoes Rating: ' + results.Ratings[1].Value +
                '\nCountries Produced In: ' + results.Country +
                '\nLanguage: ' + results.Language +
                '\nPlot: ' + results.Plot +
                '\nActors: ' + results.Actors
            )
        });
    } else if (command == 'do-what-it-says') {
        fs.readFile("random.txt", "utf8", function (err, data) {
            if (err) {
                return console.log(err)
            }
            data = data.split(",")
            command = data[0]
            search = data[1]
            //if command do-what-it-says is used, it will read the random.txt file and assign the command and search variables seperated by the ",". Then reruns this liri function with the command and search inputs.
            liri();
        })
        //if invalid command is entered, it will ask to enter a valid command.
    }else {
        console.log('PLEASE ENTER A VALID COMMAND')
    }
}
//run the function.
liri();
