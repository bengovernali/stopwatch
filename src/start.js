import React, { Component } from 'react';

class Start extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.start}>Start</button>
            </div>
        )
    }
}

export default Start;