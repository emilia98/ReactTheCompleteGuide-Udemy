import React, { Component } from 'react';

class InlineStylesCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Inline Styles Code</h1>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <div className="mb-2">We can declare styles inside the component, using an object, where we declare the styling rules as properties {('(key - value pair)')}.</div>
                            <code className="code">
                                {("const style = {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("backgroundColor: 'white',")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("font: 'inherit',")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("border: '1px solid blue',")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("padding: '8px',")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("cursor: 'pointer'")}
                            </code>
                            <code className="code">
                                {("};")}
                            </code>
                        </li>
                        <hr />
                        <li className="mb-3">
                            <div className="mb-2">We can use the styling we declared as object for an element, using <code>{("style={style}")}</code>. We assign the attribute <code>style</code> the value of an object, containing styling rules.</div>
                            <code className="code">
                                {('<button style={style}>Switch Names</button>')}
                            </code>
                        </li>
                        <hr/>
                    </ul>
                </div>

                <div className="w-80">
                    <p>The drawback of using inline styles is that we can't easily use advanced CSS features as hovering over an element.</p>
                    <p>The advantage is that the inline styles are not applied globally.</p>
                </div>
            </div>
        )
    }
}

export default InlineStylesCode;