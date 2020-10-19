import React, { Component} from 'react';

class ListsImmutableStateCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Lists Immutable State Code</h1>

                <div className="code-snippet">
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <div className="mb-2">The proper way of performing some actions with list items (ex.deleting them on click), this way changing the state, is <strong>not to mutate directly</strong> the state.</div>
                            <code className="code">
                                {("deletePersonHandler = (personIndex) => {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("// const persons = this.state.persons.slice();")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("// ES6")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("const persons = [...this.state.persons];")}
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
                            <div className="mb-2">We can easily create a shallow copy of a state value, so we can change it, and after that to mutate the state the right way.</div>
                        </li>
                        <hr/>
                    </ul>
                </div>
            </div>
        )
    }
};

export default ListsImmutableStateCode;