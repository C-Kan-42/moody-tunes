import React from 'react';
import { Link } from 'react-router-dom';
import Track from '../track/track';
import PlaylistIndex from './playlist_index';


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
    console.log(playlist);
    if (!playlist) return null;
    return(
      <li className="playlist-item" >
        <Link to={`/playlists/${playlist.id}`}>
        {/* check HOW TO REFERENCE mongo ids */}
          <h2>{playlist.title}</h2>
          <ul className="playlist-body">
            {playlist.songs.map(song => 
              <li>
                <Track key={song.id} track={song}/> 
              </li>
            )}
          </ul>
        </Link>
      </li>
    )
  }
}

export default Playlist;