import React, { Component } from 'react';

class ElapsedTime extends Component {
    render() {
        return (
            <div>
                <p>Elapsed Time: {this.props.time}</p>
            </div>
        )
    }
}

export default ElapsedTime;