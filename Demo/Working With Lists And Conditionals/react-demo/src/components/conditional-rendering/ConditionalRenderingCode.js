import React, { Component} from 'react';

class ConditionalRenderingCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Conditional Rendering Code</h1>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <div className="mb-2">We can render conditionally content using variables to store elements.</div>
                            <div className="mb-2">This could happen before the <code>return</code> statement in <code>{("render()")}</code>.</div>
                            <code className="code">
                                {("render() {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("...")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("let persons = null;")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("if (this.state.showPeople) {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("persons = <PeopleList /> ")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("}")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("return (")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("...")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("{ persons }")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{(")")}
                            </code>
                            <code className="code">
                                {("}")}
                            </code>
                        </li>
                        <hr />
                        <li className="mb-3">
                            <div className="mb-2">This is the way we can handle more complex logic inside our components and the code to stay readable.</div>
                        </li>
                        <hr/>
                    </ul>
                </div>
            </div>
        )
    }
};

export default ConditionalRenderingCode;