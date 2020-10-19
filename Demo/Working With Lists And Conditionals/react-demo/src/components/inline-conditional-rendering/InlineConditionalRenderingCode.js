import React, { Component} from 'react';

class InlineConditionalRenderingCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Inline Conditional Rendering Code</h1>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <div className="mb-2">We can render conditionally content with expression, wrapped in curly braces. </div>
                            <div className="mb-2">This could happen using ternary operator <code>{("condition ? true : false")}</code>.</div>
                            <code className="code">
                                {("{")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("this.state.showPeople")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("?")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("<PeopleList />")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{(":")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("null")}
                            </code>
                            <code className="code">
                                {("}")}
                            </code>
                        </li>
                        <hr />
                        <li className="mb-3">
                            <div className="mb-2">When we have a complex logic inside a component, this way of conditional rendering is not the proper way.</div>
                        </li>
                        <hr/>
                    </ul>
                </div>
            </div>
        )
    }
};

export default InlineConditionalRenderingCode;