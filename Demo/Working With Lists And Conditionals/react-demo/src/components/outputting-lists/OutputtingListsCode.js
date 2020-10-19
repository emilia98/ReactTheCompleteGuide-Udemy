import React, { Component} from 'react';

class OutputtingListsCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Outputting Lists Code</h1>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <div className="mb-2">We can dynamically show elements from an array.</div>
                            <div className="mb-2">This could happen with <code>map()</code> iterating over the array with data, so we generate ready-to-use JSX elements.</div>
                            <code className="code">
                                {("{")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("this.state.persons.map(person => {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("return <Person name={person.name} age={person.age} />")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("})")}
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

export default OutputtingListsCode;