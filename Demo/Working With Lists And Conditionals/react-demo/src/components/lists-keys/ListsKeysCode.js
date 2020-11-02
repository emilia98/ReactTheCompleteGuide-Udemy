import React, { Component} from 'react';

class ListsKeysCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Lists &amp; Keys Code</h1>

                <div className="code-snippet">
                    
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <p className="mb-2 text-center">Keys help React updates the list <strong>efficiently</strong>.</p>
                            <hr />
                        </li>
                        <li className="mb-3">
                            <p className="mb-2 text-center">Keys allow React to keep track of individual elements.</p>
                            <hr />
                        </li>
                        <li className="mb-3">
                            <p className="mb-2 text-center">React only rerenders the elements which changed, but not the whole list.</p>
                            <hr />
                        </li>
                        <li className="mb-3">
                            <p className="mb-2">The keys should be <strong>unique</strong>, so the best way is to use the id (ex. id of the object from database).</p>
                            <code className="code">
                                {("{ id: 'p-1', name: 'Emilia', age: 22 },")}
                            </code>
                            <hr />
                        </li>
                        <li className="mb-3">
                            <p className="mb-2">Outputting a list of elements, add the key property to the element and its value - the unique value of the element that is being rendered (ex. id of the object).</p>
                            <code className="code">
                                {("<Person ")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("name={person.name} ")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("age={person.age} ")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("click={() => this.deletePersonHandler(index)}")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;<strong>{("key={person.id}")}</strong>
                            </code>
                            <code className="code">
                                {("/>")}
                            </code>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default ListsKeysCode;


                                
                                
                                
                                
                           