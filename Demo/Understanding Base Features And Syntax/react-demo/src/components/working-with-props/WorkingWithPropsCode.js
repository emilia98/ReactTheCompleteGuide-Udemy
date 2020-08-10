import React, { Component } from 'react';

class WorkingWithPropsCode extends Component {
    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title text-center">Working With Props Code</h1>

                <ul className="list-unstyled">
                    <li className="mb-3">
                        <h3 className="font-weight-bold">Passing props:</h3>
                        <code className="code">
                            {('<Person name="Emilia"/>')}
                        </code>
                    </li>
                    <li className="mb-3">
                        <h3 className="font-weight-bold">Accessing props in:</h3>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <p className="font-weight-bold">Functional Component</p>
                                <code className="code">
                                    {('<p>My name is {props.name}</p>')}
                                </code>
                            </li>
                            <li className="mb-3">
                                <p className="font-weight-bold">Class-based Component</p>
                                <code className="code">
                                    {('<p>My name is {this.props.name}</p>')}
                                </code>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default WorkingWithPropsCode;