import React from 'react';
import {Route} from 'react-router-dom';

import Track from '../track/track';
import Reactions from '../reactions/reactions';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPlaylist: {}
        }
    };

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
    //     this.props.fetchPlaylist(this.props.match.params.playlistId);
    //     }
    // }

    render() {
        const {playlist} = this.props;
        console.log(this.props.playlist);
        if (this.props.playlist === {}) {
            return null;
        } else {
            return(
                <section className="playlist-show-detail">
                    <h2 className="playlist-title">
                        {playlist.title}
                    </h2>
                    {/* <div>{playlist.songs}</div> */}
                    <ul className="song-list">
                        {this.props.playlist.songs ? playlist.songs.map(song => 
                        <li>
                            <Track key={song.id} track={song}/> 
                        </li>
                        ) : null}
                    </ul> 
                    < Reactions />
                </section>
            );
        }    
    };
};

export default PlaylistShow;
 