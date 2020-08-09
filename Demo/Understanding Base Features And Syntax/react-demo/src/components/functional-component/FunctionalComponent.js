import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class FunctionalComponent extends Component {
    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Functional Component</h1>
                <Person/>
                <Link className="btn btn-primary" to="/functional-component/code">To Code</Link>
            </div>
        )
    }
}

export default FunctionalComponent;


