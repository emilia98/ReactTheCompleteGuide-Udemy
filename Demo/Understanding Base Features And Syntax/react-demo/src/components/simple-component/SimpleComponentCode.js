import React, { Component } from 'react';

class SimpleComponentCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 text-center page-title">Simple Component Code</h1>

                <div className="code-snippet">
                    <div>
                        <code className="code">
                            { ('import React, { Component } from \'react\';').toString() }
                        </code>
                        <p></p>
                        <code className="code">
                           { ('class SimpleComponent extends Component {').toString() } 
                        </code>
                        <code className="code">
                            &nbsp;&nbsp; render() {('{')}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp; return (
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {('<div>')}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {('<h2 className="display-4">Hi, I\'m a React App!</h2>')}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {('</div>')}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp; )
                        </code>
                        <code className="code">
                            &nbsp;&nbsp; {('}')}
                        </code>
                        <code className="code">
                            {('}')}
                        </code>
                        <p></p>
                        <code className="code">
                            export default SimpleComponent;
                        </code>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleComponentCode;