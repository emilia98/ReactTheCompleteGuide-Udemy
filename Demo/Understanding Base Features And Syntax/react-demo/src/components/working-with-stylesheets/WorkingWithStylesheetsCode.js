import React, { Component } from 'react';

class WorkingWithStylesheetsCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Working With Stylesheets Code</h1>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <div>We can create a separate stylesheet (<code>.css</code>) for each component with normal <code>CSS</code> content.</div>
                            <code className="code">
                                {('.Person {')}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{('width: 60%;')}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{('margin: 16px auto;')}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{('border: 1px solid #eee;')}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{('box-shadow: 0 2px 3px #ccc;')}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{('padding: 16px;')}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{('text-align: center;')}
                            </code>
                            <code className="code">
                                {('}')}
                            </code>
                        </li>
                        <hr/>
                        <li className="mb-3">
                            <div>We can import the content of the <code>.css</code> file inside the <code>.js</code> file, containing the component we want to style.
                             with the following syntax <code>import './the-path-to-the-stylesheet.css';</code>.</div>
                             <code className="code">import './Person.css';</code>
                        </li>
                        <hr/>
                        <li className="mb-3">
                            <div>We can use the styles defined in the stylesheet inside the component.</div>
                            <code className="code">
                                {('<div className="Person">')}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{('...')}
                            </code>
                            <code className="code">
                                {('</div>')}
                            </code>
                        </li>
                        <hr/>
                    </ul>
                </div>

                <div className="w-80">
                    <p>The drawback of importing stylesheets in a component is that the content of the stylesheet is rendered in <code>{('<style></style>')}</code> inside the <code>{('head')}</code> of the root document and the styling will be applied to all the elements, matching the selectors for which we determine the styling rules.</p>
                    <p>The advantage of styling with stylesheets is that we can use advanced CSS features as hovering over element.</p>
                </div>
            </div>
        )
    }
}

export default WorkingWithStylesheetsCode;