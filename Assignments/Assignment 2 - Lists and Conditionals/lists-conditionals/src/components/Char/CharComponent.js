import React, { Component } from 'react';

class CharComponent extends Component {
    render() {
        const style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        };
    return <span style={style} onClick={this.props.onDelete}>{this.props.char}</span>
    }
}

export default CharComponent;