import React from 'react';
import {Route} from 'react-router-dom';

import Track from '../track/track';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPlaylist: {}
        }
    };

    componentDidMount() {
        console.log(this.props.playlist)
        this.props.fetchPlaylist(this.props.playlist.id);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
    //     this.props.fetchPlaylist(this.props.match.params.playlistId);
    //     }
    // }

    render() {
        const {playlist} = this.props;

        if (this.props.playlist === {}) {
            return null;
        } else {
            return(
                <section className="playlist-show-detail">
                    <h2 className="playlist-title">
                        {playlist.title}
                    </h2>
                    <ul className="song-list">
                        {/* {playlist.songs.map(song => 
                        <li>
                            <Track key={song.id} track={song}/> 
                        </li>
                        )} */}
                    </ul>
                </section>
            );
        }    
    };
};

export default PlaylistShow;
 