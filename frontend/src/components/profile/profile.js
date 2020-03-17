import React from 'react';
import './profile.scss';
import Follow from '../follows/follow';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            follows: {}
        }
        
    }

    render() {
        return (
            <div className="profile-container">
              {console.log(this.props.user)}
                {this.props.user ? 
                    <h2 className="profile-gretting">
                        Hi, {this.props.user.username? this.props.user.username : null}
                    </h2> : null}
                <h3 className="profile-follows">
                    Followed Playlists
                </h3>
                
                <div>
                    {this.props.fetchUserFollows(this.props.user.id)}
                    {/* {console.log(Array.from(this.props.follows))} */}
                </div>
                {/* {this.props.user ? <Follow user={this.props.user}/> : null } */}
            </div>
        );
    }
};

export default Profile;