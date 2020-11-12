import React, { Component } from 'react';
import CharComponent from './CharComponent';

class CharList extends Component {
    render() {
        const text = this.props.text;

        return (
            <div>
                {  text.split('').map((c, index) => (
                    <CharComponent key={index} char={c} onDelete={() => this.props.deleteChar(index)} index={index} />
                ))}
            </div>
        )
    }
}

export default CharList;