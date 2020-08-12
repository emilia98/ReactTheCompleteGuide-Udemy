import React, { Component } from 'react';

class ChildrenPropsCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Children Props Code</h1>

                <div className="code-snippet">
                    <div className="text-center">
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <p className="font-weight-bold">Functional Component</p>
                                <code className="code mt-3">
                                    {('<p>{props.children}</p>')}
                                </code>
                            </li>
                            <li>
                                <p className="font-weight-bold">Class-based Component</p>
                                <code className="code mt-3">
                                    {('<p>{this.props.children}</p>')}
                                </code>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChildrenPropsCode;