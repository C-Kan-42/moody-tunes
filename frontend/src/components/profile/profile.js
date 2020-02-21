import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFollows();
        // this.props.fetchUser(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        return (
            <div className="profile-container">
                {/* <p>Hi, {this.props.user.username}</p> */}
            </div>
        );
    }
};

export default Profile;