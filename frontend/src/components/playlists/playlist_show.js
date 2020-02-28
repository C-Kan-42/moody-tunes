import React from 'react';
import {Route} from 'react-router-dom';
// import axios from 'axios';
import Track from '../track/track';
import Reactions from '../reactions/reactions';
import './playlist-show.scss';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // currentPlaylist: {},
            reaction: ""
        }

        this.reactOnPlaylist = this.reactOnPlaylist.bind(this);
        this.followPlaylist = this.followPlaylist.bind(this);
    };

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        // this.props.fetchReactions();
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
    //     this.props.fetchPlaylist(this.props.match.params.playlistId);
    //     }
    // }

    reactOnPlaylist(e) {
        // var updatePlaylistStats = {
        //     react: function(playlistId)  {
        //         document.querySelector("react-counts").textContent++;
        //     }
        // };
  
        e.preventDefault();
        var playlistId = this.props.playlist._id;
        // var action = e.target.textContent.trim();
        const reaction = Object.assign("", this.state);
        document.querySelector("#react-counts").textContent++;
        const reactionData = {id: playlistId, reaction: "happy"}
        // axios.post('/playlists/' + playlistId + '/react', {action: action});
        this.props.sendReaction(reactionData);
    }

    followPlaylist(e) {
        console.log('follow button clicked')
        e.preventDefault();
        let playlistId = this.props.playlist._id;
    }

    render() {
        const {playlist} = this.props;
        console.log(playlist.reactions)
        // console.log(this.props.playlist);
        if (this.props.playlist === {}) {
            return null;
        } else {
            console.log(playlist.reactions)
            return(
                <section className="playlist-show-detail">
                    <div className="playlist-button-outer">
                        <div className="playlist-button-container">
                            <button className="playlist-detail+f" onClick={this.followPlaylist}>
                                + Follow
                            </button>
                        </div>
                    </div>
                    <div className="playlist-details">
                        <h2 className="playlist-title">
                            {playlist.title}
                        </h2>
                        <ul className="song-list">
                            {this.props.playlist.songs ? playlist.songs.map(song => 
                            <li>
                                <Track key={song._id} track={song}/> 
                            </li>
                            ) : null}
                        </ul> 
                        <div className="reaction-buttons">
                            <button onClick={this.reactOnPlaylist}>
                                😊
                            </button>
                            <span id="react-counts">{this.props.playlist.reactions ? playlist.reactions.happy : null}</span>
                        </div>
                    </div>
                    {/* < Reactions /> */}
                </section>
            );
        }    
    };
};

export default PlaylistShow;
 