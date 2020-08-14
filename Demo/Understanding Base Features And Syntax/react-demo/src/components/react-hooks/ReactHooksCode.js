import React, { Component } from 'react';

class ReactHooksCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">React Hooks Code</h1>

                <div className="page-text">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            React Hooks is an addition in <code>React 16.8</code>.
                        </li>
                        <li className="mb-3">
                            <code>useState()</code> is a hook, that helps us manage a state in <strong>functional components</strong>.
                        </li>
                        <li className="mb-3">
                            The main disadvantage of <code>useState()</code> hook is that if we use it to change only some properties in the state,
                            all other properties <strong>are lost</strong>.
                        </li>
                        <li className="mb-3">
                            We can use two approaches to resolve this problem - to add the missing properties <strong>manually</strong> or
                            <strong>to split</strong> the state into several parts, so each part will manage itself.
                        </li>
                        <li className="mb-3">
                            We can use <code>useState()</code> several times in one functional component.
                        </li>
                    </ul>
                </div>

                <div className="code-snippet">
                    <div>
                        <code className="code">
                            {("import React, { useState } from 'react';")}
                        </code>
                        <code className="code mb-3"></code>
                        <code className="code">
                            {("const [personsState, setPersonsState] = useState({")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;{("persons: [")}
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
                            &nbsp;&nbsp;{("],")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;{("otherState: 'some other value'")}
                        </code>
                        <code className="code">
                            {("});")}
                        </code>
                        <code className="code mb-3"></code>
                        <code className="code">
                            {("const [anotherState, setAnotherState] = useState('anotherValue');")}
                        </code>
                        <code className="code mb-3"></code>
                        <code className="code">
                            {("console.log(personsState, anotherState);")}
                        </code>
                        <code className="code mb-3"></code>
                        <code className="code">
                            {("const switchNamesHandler = () => {")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;{("setPersonsState({")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;{("persons: [")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Emi', age: 22 },")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Max', age: Math.floor(Math.random() * 30) },")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{("{ name: 'Manu', age: 29 }")}
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
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactHooksCode;