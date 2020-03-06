import React from 'react';
// import { withRouter  } from 'react-router-dom';

class Follow extends React.Component {
    constructor(props) {
        super(props)
    };

    // componentDidMount() {
    //     let {fetchFollows} = this.props
    //     console.log(this.props, "returning propsssss");
    //     fetchFollows()
    // }

    render() {
        // console.log(this.props);
        return (
            <div>
                All followed Playlist here
            </div>
        )
    }
};

export default Follow;