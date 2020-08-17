import React, { Component } from 'react';

class TwoWayBindingCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Two Way Binding Code</h1>

                <p>Two-way binding ensures that when the model gets updated, the UI (view) also does. 
                   And when the UI (view) gets updated, so does the model. </p>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <code className="code">
                                {("nameChangedHandler = (event) => {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("this.setState({")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("persons: [")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{("{ name: event.target.value, age: 22 },")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Max', age: 28 },")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(" { name: 'Manu', age: 29 }")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("]")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("});")}
                            </code>
                            <code className="code">
                                {("}")}
                            </code>
                            <div className="mt-3">
                                The code snippet shows that we are watching for an event in the view. 
                                If the value in the view is changed, the model changes too.
                            </div>
                            <hr />
                        </li>
                        <li className="mb-3">
                            <code className="code">
                                {('<input type="text" onChange={props.change} value={props.name} />')}
                            </code>
                            <div className="mt-3">
                                This code shows that we are watching for an event in the model.
                                If the value in the model changes, the value in the view also does.
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TwoWayBindingCode;