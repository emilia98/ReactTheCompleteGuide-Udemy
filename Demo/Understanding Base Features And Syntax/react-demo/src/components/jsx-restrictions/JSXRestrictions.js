import React, { Component } from 'react';

class JSXRestrictions extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 text-center page-title">JSX Restrictions</h1>

                <div className="page-text">
                    <p>
                        <pre>When you want to add a class attribute to an element, use <strong>className</strong> instead of <strong>class</strong>.</pre>
                    </p>
                    <p>
                        <pre>In one component, you should have <strong>only one root element</strong> and everything will be nested inside it.</pre>
                    </p>
                </div>
               
            </div>
        )
    }
}

export default JSXRestrictions;