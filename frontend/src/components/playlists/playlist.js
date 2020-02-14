import React from 'react';
import { Link } from 'react-router-dom';
import Track from '../track/track';
import PlaylistIndex from './playlist_index';


class Playlist extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { playlist } = this.props; 
    return(
      <div>
        <h2>{playlist.title}</h2>
        <ul className="playlist-body">
          {playlist.songs.map(song => 
            <li>
              <Track key={song.id} track={song}/> 
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Playlist;