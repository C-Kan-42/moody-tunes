import React from 'react';

class Reactions extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            // "happy": 0,
            // "sad": 0
            count: 0
        }
        this.updateReactionCount = this.updateReactionCount.bind(this);
    }

    updateReactionCount() {
        // if (mood === "happy") {
        //     this.setState( prevState => {
        //         return {
        //             "happy": prevState["happy"]+ 1,
        //             "sad": prevState["sad"]
        //         }
        //     });
        // } else if (mood === "sad") {
        //     this.setState(prevState => {
        //         return {
        //             "happy": prevState["happy"],
        //             "sad": prevState["sad"] + 1
        //         }
        //     });
        // }
        this.setState( prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div className="buttons-container">
                <ul>
                    <li className="button-component">
                        {this.state.count}
                        <button onClick={this.updateReactionCount}>😊</button>
                    </li>
                    <li className="button-component">
                        {this.state.count}
                        <button onClick={this.updateReactionCount}>&#128549;</button>
                    </li>
                </ul>
            </div>      
        );
    }
};

export default Reactions;