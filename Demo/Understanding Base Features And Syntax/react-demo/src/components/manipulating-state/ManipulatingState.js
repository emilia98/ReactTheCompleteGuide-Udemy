import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class ManipulatingState extends Component {
    state = {
        persons: [
            { name: 'Emilia', age: 22 },
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 }
        ],
        otherState: 'some state'
    }

    switchNamesHandler = () => {
        console.log(this.state);
        this.setState({
            persons: [
                { name: 'Emi', age: 22 },
                { name: 'Max', age: Math.floor(Math.random() * 30) },
                { name: 'Manu', age: 29 }
            ]
        });
        console.log(this.state);
    }


    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Manipulating State</h1>
                <button onClick={this.switchNamesHandler} className="mb-3">Switch Names</button>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Give your best for React!</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

                <Link className="btn btn-primary" to="/manipulating-state/code">To Code</Link>
            </div>
        )
    }
}

export default ManipulatingState;