import React from 'react';

class Playlists extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    handleClick(e) {
        e.preventDefault();
        
    }

    render() {
        return null;
    }
};

export default Playlists;