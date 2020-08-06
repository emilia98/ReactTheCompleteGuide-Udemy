import React, { Component } from 'react';

class UnderstandingJSXCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 text-center">Understanding JSX Code</h1>
                
                <div className="code-snippet">
                    <p>
                        <code className="code">
                            React.createElement(
                        </code>
                        <code className="code">
                            &nbsp;&nbsp; 'div',
                        </code>
                        <code className="code">
                            &nbsp;&nbsp; null,
                        </code>
                        <code className="code">
                            &nbsp;&nbsp; {("React.createElement(")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp; 'h1',
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp; {("{ 'className': 'display-4'},")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp; {("'Hi, I\'m a React App!')")}
                        </code>
                        <code className="code">
                            )
                        </code>
                    </p>
                </div>
            </div>
        )
    }
}

export default UnderstandingJSXCode;