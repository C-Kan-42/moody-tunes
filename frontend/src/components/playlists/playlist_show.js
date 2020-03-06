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
            songs: [],
            title: "",
            reactions: {
                happy: 0,
                sad: 0
            }
        }

        this.reactOnPlaylist = this.reactOnPlaylist.bind(this);
        this.reactOnPlaylistSad = this.reactOnPlaylistSad.bind(this);
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
        // const reaction = Object.assign("", this.state);
        
        this.props.playlist.reactions ? document.querySelector("#react-counts-happy").textContent++ : console.log(null);
        const reactionData = {id: playlistId, reaction: "happy"}
        // axios.post('/playlists/' + playlistId + '/react', {action: action});
        this.props.sendReaction(reactionData);
    }


    reactOnPlaylistSad(e) {
        e.preventDefault();
        var playlistId = this.props.playlist._id;
        const reactionData = {id: playlistId, reaction: "sad"}
        this.props.playlist.reactions ? document.querySelector("#react-counts-sad").textContent++ : console.log(null);
        this.props.sendReaction(reactionData);
    }
    
    followPlaylist(e) {
        // console.log('follow button clicked')
        e.preventDefault();
        let userId = this.props.user ? this.props.user._id : null;
        let playlistId = this.props.playlist._id;
        const followData = {playlistId: playlistId, userId: userId};
        this.props.sendFollow(followData);
    }

    render() {
        const {playlist} = this.props;
        // console.log(playlist.reactions)
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
                            <div>
                                <button onClick={this.reactOnPlaylist}>
                                    😊
                                </button>
                                {this.props.playlist.reactions ? <span id="react-counts-happy">{playlist.reactions.happy}</span> : null}
                            </div>
                            <div>
                                <button onClick={this.reactOnPlaylistSad}>
                                    😢
                                </button>
                                {this.props.playlist.reactions ? <span id="react-counts-sad">{playlist.reactions.sad}</span> : null}
                            </div>
                           
                            {/* <button onClick={this.reactOnPlaylistAngry}>
                                😢
                            </button>
                            {this.props.playlist.reactions ? <span id="react-counts-sad">{playlist.reactions.angry}</span> : null} */}

                        </div>
                    </div>
                    {/* < Reactions /> */}
                </section>
            );
        }    
    };
};

export default PlaylistShow;
 