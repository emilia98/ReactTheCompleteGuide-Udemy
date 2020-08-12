import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class UnderstandingState extends Component {
    state = {
        persons: [
            { name: 'Emilia', age: 22 },
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 }
        ]
    }

    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Undertanding State</h1>
                <button className="mb-3">Switch Names</button>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Give your best for React!</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

                <Link className="btn btn-primary" to="/understanding-state/code">To Code</Link>
            </div>
        )
    }
}

export default UnderstandingState;