import React, { Component } from 'react';

class UnderstandingJSX extends Component {
    render() {
        return (
            React.createElement("div",
                { 'className': 'page-container text-center' },
                React.createElement("h1",
                    { 'className': 'display-3' },
                    'Understanding JSX'
                ),
                React.createElement(
                    'div', 
                    null,
                    React.createElement(
                        'h1', 
                        { 'className': 'display-4'},
                        'Hi, I\'m a React App!')
                ),
                React.createElement(
                    'a',
                    { 
                        'className': 'btn btn-primary', 
                        'href': 'understanding-jsx/code'
                    },
                    'To Code'
                )
            )
        )
    }
}

export default UnderstandingJSX;