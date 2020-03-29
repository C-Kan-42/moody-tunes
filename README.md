# moody-tunes
![alt_text](https://i.imgur.com/VFNKMHn.png)

Visit: <a href="https://moody-tunes-app.herokuapp.com/#/">MoodyTunes</a>

MoodyTunes is a music sharing site where users can find the perfect playlist for their mood. Each playlist has reaction upvotes which endorses that playlist's mood. Users can also follow their favorite playlists for easy access.

## Technology
This app is built on a MERN tech stack. It uses MongoDB as the database for Node.js 
and Express.js on the backend, and Javascript/React/Redux to render the front-end.

## Features
* User authentication
* Embedded Spotify playlists
  * Easy access to playlists
* Follow playlists (for registered users)
* User dashboard (for registered users)
  * Displays user's followed playlists
* Reaction buttons on playlists
  * With live-updated reaction counts />

## Playlist reaction buttons and follow button

<img src="https://i.imgur.com/XqxS43o.png" height=300 width=300 />

* Each playlist object in the database has an associated reactions object, which contains information about the number of reactions recorded for each emotion. 
* When a reaction button is clicked, the reaction count is instantly updated and the backend is modified to reflect the newly-added reaction.

* Also, each playlist can be followed, after which users can go to their profile page to view their followed playlists.
* This was implemented by having a separate "follows" collection in MongoDB, where each follow document contains the userId and the current playlistId. 
* When a user clicks the follow button, a new follow document is created in the database. The user profile page simply fetches all follows associated with the current userId, and displays the playlists by accessing the corresponding playlistId.

## Feature Implementation Issues
* Persisting reaction count data to the database
* Persisting follow playlist action
  * Passing and recieving state shape correctly in order to make the follow action persist
