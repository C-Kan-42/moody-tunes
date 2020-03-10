import React from 'react';
import './profile.scss';
import Follow from '../follows/follow';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        }
    }

    render() {
        return (
            <div className="profile-container">
                {this.props.user ? 
                    <h2 className="profile-gretting">
                        Hi, {this.props.user.username? this.props.user.username : null}
                    </h2> : null}
                <h3 className="profile-follows">
                    Followed Playlists
                </h3>

                <Follow />
            </div>
        );
    }
};

export default Profile;