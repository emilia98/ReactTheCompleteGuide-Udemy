import React, { Component } from 'react';

class PassingMethodReferencesCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Passing Method References Code</h1>

                <p className="text-center"> We have two ways to pass a method reference to a nested component: </p>
                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <code className="code">
                                {("onClick={() => this.switchNamesHandler('Emilia!')}")}
                            </code>
                            <div className="mt-2">This is <strong>not the recommended</strong> syntax, because is not so efficient.</div>
                        </li>
                        <li className="mb-3">
                            <code className="code">
                                {("this.switchNamesHandler.bind(this, 'Emi!')")}
                            </code>
                            <div className="mt-2">Using <code>bind</code> is the recommended syntax.</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PassingMethodReferencesCode;