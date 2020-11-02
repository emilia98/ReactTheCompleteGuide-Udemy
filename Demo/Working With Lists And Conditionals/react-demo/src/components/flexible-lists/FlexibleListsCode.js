import React, { Component} from 'react';

class FlexibleListsCode extends Component {
    render() {
        return (
            <div className="page-container">
                <h1 className="display-3 page-title text-center">Flexible Lists Code</h1>

                <div className="code-snippet">
                    
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <p className="mb-2">Define the behaviour of the list items and using the unique value, so to know exactly which item should be changed.</p>
                            <code className="code">
                                {("nameChangedHandler = (event, id) => {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("const personIndex = this.state.persons.findIndex(p => {")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;&nbsp;&nbsp;{("return p.id === id;")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("});")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("const person = { ...this.state.persons[personIndex] };")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("person.name = event.target.value;")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("const persons = [ ...this.state.persons ];")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("persons[personIndex] = person;")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("this.setState( { persons: persons });")}
                            </code>
                            <code className="code">
                                {("}")}
                            </code>
                            <hr />
                        </li>
                        <li className="mb-3">
                            <p className="mb-2">Setting the method, which will be responsible for the behaviour of the items in the list.</p>
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
                                &nbsp;&nbsp;{("key={person.id}")}
                            </code>
                            <code className="code">
                                &nbsp;&nbsp;{("change={(event) => this.nameChangedHandler(event, person.id)}")}
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

export default FlexibleListsCode;


                                
                                

    
       
    

    
    

    

    
    

    
