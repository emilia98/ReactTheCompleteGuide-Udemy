import React, { Component } from 'react';

class ManipulatingStateCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Manipulating State Code</h1>

                <div className="code-snippet">
                    <div>
                        <code className="code">
                            {('this.setState({')}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;{('persons: [')}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Emi', age: 22 },")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Max', age: Math.floor(Math.random() * 30) },")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Manu', age: 29 }")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;{("]")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;{('});')}
                        </code>
                    </div>
                </div>

                <div className="page-text">
                    <ul className="list-unstyled mt-3">
                        <li className="mb-2">
                            The state is immutable, so don't do this <code>this.state.persons[0].name = 'Emi';</code>
                        </li>
                        <li className="mb-2">
                            Instead use this method, that comes with extending <code>Component</code> - <code>this.setState()</code> and
                        passing the values from the state that you want to change.
                    </li>
                        <li className="mb-2">
                            <code>this.setState()</code> updates only this values in the state that are passed inside the method.
                        <strong> The other values in the state are still there, left unchanged.</strong>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ManipulatingStateCode;
