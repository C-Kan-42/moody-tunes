import React from 'react';

class Reactions extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.updateReactionCount = this.updateReactionCount.bind(this);
    }

    render() {
        return (
            <button></button>
        );
    }
};

export default Reactions;