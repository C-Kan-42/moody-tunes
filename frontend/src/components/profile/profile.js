import React from 'react';

class Profile extends React.Component {
    construtor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFollows();
        this.props.fetchUser(this.props.match.params.id);
    }

    render() {
        return <div></div>;
    }
};

export default Profile;