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

    componentDidMount() {
        this.props.fetchFollows();
    }

    render() {
        console.log(this.props);
        console.log(this.state.user);
        return (
            <div className="profile-container">
                <h2 className="profile-gretting">
                    Hi, {this.props.user.username ? this.props.user.username : null }
                </h2>

                <h3 className="profile-follows">
                    Followed Playlists
                </h3>

                <Follow />
            </div>
        );
    }
};

export default Profile;