import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class WorkingWithStylesheets extends Component {
    state = {
        persons: [
            { name: 'Emilia', age: 22 },
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 }
        ],
        otherState: 'some state'

    }

    switchNamesHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 22 },
                { name: 'Max', age: Math.floor(Math.random() * 30) },
                { name: 'Manu', age: 29 }
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 22 },
                { name: 'Max', age: 28 },
                { name: 'Manu', age: 29 }
            ]
        });
    }
    
    render() {
        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Working With Stylesheets</h1>
                
                <button onClick={() => this.switchNamesHandler('Emilia!')}  className="mb-3">Switch Names</button>

                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}
                    click={this.switchNamesHandler.bind(this, 'Emi!')}
                    change={this.nameChangedHandler}>
                        Give your best for React!
                </Person>
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}/>
                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/>

                <Link className="btn btn-primary mt-3" to="/working-with-stylesheets/code">To Code</Link>                    
            </div>
        )
    }
}

export default WorkingWithStylesheets;