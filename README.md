# Liri-Bot
In an effort to solve the issue being incredibly lazy... instead of having to use multiple websites to search for movies, concerts, and songs...Liri-Bot was created! This application is a CLI application that can run a search on a movie, upcoming concerts, or songs on spotify. 

# Code Organization
The application's organization is fairly straightforward. The entire application is placed within a function liri(). Within this function, there are if/else statements that will run based off the user's command to return the results.

# Prerequisites
## Node Packages:
* axios
* fs
* node-spotify-api
* moment
* dotenv

## API Keys:
* Spotify
* OMDB
* Band in Town

# Setup Instructions:
1. Download all files from [GitHub Repo](https://github.com/KevinJoun/liri-node-app)
2. Create a .env and add the following and change to your spotify id and key:

#Spotify API keys

SPOTIFY_ID=your-spotify-id

SPOTIFY_SECRET=your-spotify-secret


# App Instructions:
The application will take one of four commands and a search parameter. 

The command "concert-this" will search Band in Town for an artist the user searches for and return a list of ALL results with the following format:

Venue Name: 

Venue Location: 

Date of Event: 


The command "spotify-this-song" will search the spotify API for a song the user searched for and return a the first search result in the following format:

Artist(s): 

Song Name: 

Spotify URL: 

Album: 


If no search parameter is entered, it will default to the song "The Sign" by Ace of Base.

The command "movie-this" will search the OMDB API for the movie title and return one search result in the following format:

Title: 

Release Year:

IMDB Rating:

Rotten Tomatoes Rating:

Countried Produced In: 

Language: 

Plot:

Actors:


The command "do-what-it-says" will take read the random.txt file and execute the command and search in the random.txt file. random.txt file will take the commands and search seperated by a comma (no space).
Example: movie-this,avengers
