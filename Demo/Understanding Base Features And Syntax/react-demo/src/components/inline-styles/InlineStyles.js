import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class InlineStyles extends Component {
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
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Inline Styles</h1>

                <button 
                    style={style}
                    onClick={() => this.switchNamesHandler('Emilia!')} 
                    className="mb-3">Switch Names</button>

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

                <Link className="btn btn-primary mt-3" to="/inline-styles/code">To Code</Link>
            </div>
        )
    }
}

export default InlineStyles;