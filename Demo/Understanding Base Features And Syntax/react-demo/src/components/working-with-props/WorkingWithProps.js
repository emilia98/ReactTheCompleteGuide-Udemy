import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class WorkingWithProps extends Component {
    render() {
        return (
            <div className="page-container text-center">
                <h1 className="dislay-3 page-title">Working With Props</h1>

                <div>
                    <Person name="Emilia" age="22"/>
                    <Person name="Max" age="28" />
                    <Person name="Manu" age="29" />
                </div>

                <Link className="btn btn-primary" to="/working-with-props/code">To Code</Link>
            </div>
        )
    }
}

export default WorkingWithProps;