import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        }
    }

    componentDidMount() {
        this.props.fetchFollows();
        // this.props.fetchUser(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        return (
            <div className="profile-container">
                <p>Hi, {this.props.user.username ? this.props.user.username : null }</p>
            </div>
        );
    }
};

export default Profile;