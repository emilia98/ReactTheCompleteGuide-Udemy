import React, { Component} from 'react';

class ListsMutatingStateCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Lists Mutating State Code</h1>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <div className="mb-2">We can perform some actions with list items (ex.deleting them on click), this way changing the state.</div>
                            <div className="mb-2">This change <strong>should not</strong> mutate the state, so the example below is NOT the right way for doing so.</div>
                            <code className="code">
                                {("deletePersonHandler = (personIndex) => {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("const persons = this.state.persons;")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("persons.splice(personIndex, 1);")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("this.setState({ persons: persons });")}
                            </code>
                            <code className="code">
                                {("}")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </code>
                            <code className="code">
                                {("{")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("this.state.persons.map( (person, index) => {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)}/>")}
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
                            <div className="mb-2">As we store the array reference in the <code>persons</code> variable, we don't copy the array values, but directly change it with the <code>splice()</code>.</div>
                        </li>
                        <hr />
                        <li className="mb-3">
                            <div className="mb-2">To not mutate the state, we shouldn't store references to its values, but to make shallow copies of them.</div>
                        </li>
                        <hr/>
                    </ul>
                </div>
            </div>
        )
    }
};

export default ListsMutatingStateCode;