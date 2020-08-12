import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class HandlingEvents extends Component {
    state = {
        persons: [
            { name: 'Emilia', age: 22 },
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 }
        ]
    }

    switchNamesHandler = () => {
        console.log('Clicked!');
    }
    
    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Handling Events</h1>

                <button onClick={this.switchNamesHandler} className="mb-3">Switch Names</button>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Give your best for React!</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

                <Link className="btn btn-primary" to="/handling-events/code">To Code</Link>
            </div>
        )
    }
}

export default HandlingEvents;