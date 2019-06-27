import React, { Component } from 'react';

class Stop extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.stop}>Stop</button>
            </div>
        )
    }
}

export default Stop;