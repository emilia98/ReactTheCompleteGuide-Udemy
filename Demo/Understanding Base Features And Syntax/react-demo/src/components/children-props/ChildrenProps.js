import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class ChildrenProps extends Component {
    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Children Props</h1>

                <Person name="Emilia" age="22">Give your best for React!</Person>  

                <Link className="btn btn-primary" to="/children-props/code">To Code</Link>
            </div>
        )
    }
}

export default ChildrenProps;