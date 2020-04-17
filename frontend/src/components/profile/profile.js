import React from 'react';
import { Link } from 'react-router-dom';
import './profile.scss';
import Follow from '../follows/follow';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlists: [],
            follows: [],
            follow: {},
            currentUser: {}
        }
        
        this.playlistTitleFetcher = this.playlistTitleFetcher.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserFollows(this.props.match.params.userId) // want this to get stored in local state
            .then(res => {
                // console.log(res.follows.data);
                this.setState({follows: res.follows.data})
            })
            .then(res => {
                this.props.fetchPlaylists()
                    .then(res => {
                        // console.log(res)
                        this.setState({playlists: res.playlists.data});
                    })
            }); 
    }

    playlistTitleFetcher(follow) {
        // console.log(this.props.playlists)
        let title;
        let currPlaylist;
        if (this.props.playlists.length > 0) {
            this.props.playlists.forEach(playlist => {
                if (playlist._id === follow.playlistId) {
                    currPlaylist = playlist;
                };
            });
        }

        return (
            <li className="followed-playlist-item">
                {currPlaylist ? 
                (<Link to={`/playlists/${currPlaylist._id}`} style={{ textDecoration: 'none' }}>
                    {currPlaylist.title}
                </Link>) : null}
            </li>
        );
        
    }

    render() {
        return (
            <div className="profile-container">
              {/* {console.log(this.props.user)} */}
                {this.props.currentUser ? 
                    <h2 className="profile-gretting">
                        Hi, {this.props.currentUser.username? this.props.currentUser.username : null}
                    </h2> : null}
                <h3 className="profile-follows">
                    Your Followed Playlists
                </h3>
                {/* {console.log((this.props.follows))} */}
                <ul className="followed-playlists">
                    {this.props.follows.length > 0 ? (this.props.follows.map(follow => 
                        this.playlistTitleFetcher(follow)
                    )) : null}
                </ul>
            </div>
        );
    }
};

export default Profile;