import React from 'react';
import { Link } from 'react-router-dom';
import './profile.scss';
import Follow from '../follows/follow';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlists: [],
            user: {},
            follows: {}
        }
        
        this.playlistTitleFetcher = this.playlistTitleFetcher.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserFollows(this.props.match.params.userId);
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
            <li>
                {currPlaylist ? 
                (<Link to={`/playlists/${currPlaylist._id}`} style={{ textDecoration: 'none' }}>
                    {currPlaylist.title}
                </Link>) : null}
            </li>
        );
        
    }

    render() {
        // console.log((this.props.follows));

        return (
            <div className="profile-container">
              {/* {console.log(this.props.user)} */}
                {this.props.user ? 
                    <h2 className="profile-gretting">
                        Hi, {this.props.user.username? this.props.user.username : null}
                    </h2> : null}
                <h3 className="profile-follows">
                    Followed Playlists
                </h3>
                
                <ul className="followed-playlists">
                    {Array.isArray(this.props.follows) ? (this.props.follows.map(follow => 
                        // <li>
                        //     {follow.playlistId}
                        // </li>
                        this.playlistTitleFetcher(follow)
                    )) : null}
                </ul>
                {/* {this.props.user ? <Follow user={this.props.user}/> : null } */}
            </div>
        );
    }
};

export default Profile;