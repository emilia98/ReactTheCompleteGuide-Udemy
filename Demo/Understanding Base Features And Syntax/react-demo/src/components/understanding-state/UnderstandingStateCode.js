import React, { Component } from 'react';

class UnderstandingStateCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Understanding State Code</h1>

                <div className="text-center">
                    <ul className="list-unstyled">
                        <li>
                            <code>state</code> is a property, which allows us to manage data <strong>inside</strong> a component.
                        </li>
                        <li>
                            Changing <code>state</code> triggers a UI update.
                        </li>
                        <li>
                            <code>state</code> is a property of the component class. The name <strong>is not optional</strong>.
                        </li>
                    </ul>
                </div>

                <div className="code-snippet">
                    <div>
                        <code className="code">
                            {('state = {')}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;{('persons: [')}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Emilia', age: 22 },")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Max', age: 28 },")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Manu', age: 29 }")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;{("]")}
                        </code>
                        <code className="code">
                            {("}")}
                        </code>
                    </div>
                </div>
            </div>
        )
    }
}

export default UnderstandingStateCode;