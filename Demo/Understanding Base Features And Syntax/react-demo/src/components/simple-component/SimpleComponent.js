import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SimpleComponent extends Component {
    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3">Simple Component</h1>
                <div>
                    <h2 className="display-4">Hi, I'm a React App!</h2>
                </div>
                <Link className="btn btn-primary" to="/simple-component/code">To Code</Link>
            </div>
        );
    }
}

export default SimpleComponent;