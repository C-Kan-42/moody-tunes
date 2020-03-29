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
  * With live-updated reaction counts

## Playlist reaction buttons and follow button
![alt_text](https://i.imgur.com/XqxS43o.png)

## Feature Implementation Issues
* Persisting reaction count data to the database
* Persisting follow playlist action
  * Passing and recieving state shape correctly in order to make the follow action persist
