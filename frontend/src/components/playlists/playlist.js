import React from 'react';
import { Link } from 'react-router-dom';
import Track from '../track/track';
import PlaylistIndex from './playlist_index';
import './playlist.scss';

class Playlist extends React.Component {
  constructor(props) {
    super(props)

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   const playlistId = this.props.playlist.id;
  //   this.props.history.push(`/playlists/${playlistId}`);
  // }

  render() {
    const { playlist } = this.props; 
    if (!playlist) return null;
    // var source = `https://open.spotify.com/embed/playlist/${playlist.spotifyId}`;
    if (playlist.title === 'Happy')
      var imgSrc = "https://mosaic.scdn.co/640/ab67616d0000b27304bfd5a5fd5aa6ca648f66aaab67616d0000b2733138f891f3075c9c5d944037ab67616d0000b27382c80d6ec5b001d9ae49564dab67616d0000b2738e26bf4293c9da7a6439607b";
    else if (playlist.title === 'Chill')
      var imgSrc = "https://mosaic.scdn.co/640/24ed37770972eb75f697dcc6af3e3820ee2413e8ab67616d0000b27335f1ecb5dd00dfee10900806ab67616d0000b2734ff02465293ecbc4fcbe0bbaab67616d0000b2739aafa820f8f3e52cbebd18c0";
    else if (playlist.title === 'Sad')
      var imgSrc = "https://mosaic.scdn.co/640/ab67616d0000b27334d4dd05ab32165c37775f09ab67616d0000b2737aede4855f6d0d738012e2e5ab67616d0000b273c5649add07ed3720be9d5526ab67616d0000b273f5d8fc1c5ffe3044d1f0a72e";
    else 
    var imgSrc = "https://mosaic.scdn.co/640/ab67616d0000b27327c8e79e48a7b9b7c9ed6ba0ab67616d0000b2739203fd1f5c23f0ad92ce63faab67616d0000b273b12877d8bdfaa0f19b4624faab67616d0000b273dcbd25c605dddb32022cecba";
  
    return(
      <li className="playlist-item" >
        <Link to={`/playlists/${playlist._id}`} style={{ textDecoration: 'none' }}>
        {/* check HOW TO REFERENCE mongo ids */}
          <h2>{playlist.title}</h2>
          <ul className="playlist-body">
            {/* {playlist.songs.map(song => 
              <li>
                <Track key={song.id} track={song}/> 
              </li>
            )} */}
            <img src={imgSrc} className="playlist-image" />
          </ul>
        </Link>
      </li>
    )
  }
}

export default Playlist;