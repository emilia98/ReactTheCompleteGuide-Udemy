import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class ConditionalRendering extends Component {
    state = {
        persons: [
            { name: 'Emilia', age: 22 },
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 }
        ],
        otherState: 'some state',
        showPeople: false
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

    togglePeopleHandler = () => {
        const doesShow = this.state.showPeople;
        this.setState({
            showPeople: !doesShow
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

        let persons = null;

        if (this.state.showPeople) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        click={this.switchNamesHandler.bind(this, 'Emi!')}
                        change={this.nameChangedHandler}>
                        Give your best for React!
                    </Person>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age} />
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />
                </div>
            );
        }

        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Conditional Rendering</h1>

                <button
                    style={style}
                    onClick={this.togglePeopleHandler}
                    className="mb-3">Toggle People</button>
                    { persons }
                <div>
                    <Link className="btn btn-primary mt-3" to="/conditional-rendering/code">To Code</Link>
                </div>
            </div>
        )
    }
}

export default ConditionalRendering;