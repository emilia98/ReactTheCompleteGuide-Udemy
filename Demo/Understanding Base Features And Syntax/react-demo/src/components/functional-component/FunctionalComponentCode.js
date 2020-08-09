import React, { Component } from 'react';

class FunctionalComponentCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 text-center page-title">Functional Component Code</h1>

                <div className="code-snippet">
                    <div>
                        <code className="code">
                            import React from 'react';
                        </code>
                        <code className="code">
                           {("const person = () => {")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;return (
                        </code>
                        <code className="code">
                            &nbsp;&nbsp;&nbsp;&nbsp; {("<h3>I'm a Person!</h3>")}
                        </code>
                        <code className="code">
                            &nbsp;&nbsp; {(")")}
                        </code>
                        <code className="code">
                            {("}")}
                        </code>
                        <code className="code">
                            export default person;
                        </code>
                    </div>
                </div>
            </div>
        )
    }
}

export default FunctionalComponentCode;