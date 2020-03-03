import React from 'react';
import './profile.scss';

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
        return (
            <div className="profile-container">
                <h2 className="profile-gretting">
                    {/* Hi, {this.props.user.username ? this.props.user.username : null } */}
                </h2>

                <h3 className="profile-follows">
                    Followed Playlists
                </h3>
            </div>
        );
    }
};

export default Profile;