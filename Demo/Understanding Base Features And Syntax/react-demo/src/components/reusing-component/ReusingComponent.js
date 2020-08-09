import React, { Component } from 'react';
import Person from './Person/Person';

class ReusingComponent extends Component {
    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Reusing Component</h1>
                <Person />
                <Person />
                <Person />
            </div>
        )
    }
}

export default ReusingComponent;