import React, { Component } from 'react';

class HandlingEventsCode extends Component {
    render() {
        return (
            <div className="page-conatainer">
                <h1 className="display-3 page-title text-center">Handling Events Code</h1>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <span className="font-weight-bold">Attaching event listener to an element</span>
                            <code className="code">{('<button onClick={this.switchNamesHandler} className="mb-3">Switch Names</button>')}</code>
                        </li>
                        <li className="mb-3">
                            <span className="font-weight-bold">Adding an event handler</span>
                            <code className="code">{('switchNamesHandler = () => {')}</code>
                            <code className="code">&nbsp;&nbsp;{("console.log('Clicked!');")}</code>
                            <code className="code">{('}')}</code>
                        </li>
                        <li className="mb-3">
                            <span className="font-weight-bold">Correct way of adding an event handler</span>
                            <code className="code">{('onClick={this.switchNamesHandler}')}</code>
                        </li>
                        <li className="mb-3">
                            <span className="font-weight-bold">Wrong way of adding an event handler (calling the function)</span>
                            <code className="code">{('onClick={this.switchNamesHandler()}')}</code>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HandlingEventsCode;