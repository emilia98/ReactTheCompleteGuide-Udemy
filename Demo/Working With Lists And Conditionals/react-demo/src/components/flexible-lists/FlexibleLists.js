import React, { Component } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';

class FlexibleLists extends Component {
    state = {
        persons: [
            { id: 'p-1', name: 'Emilia', age: 22 },
            { id: 'p-2', name: 'Max', age: 28 },
            { id: 'p-3', name: 'Manu', age: 29 }
        ],
        otherState: 'some state',
        showPeople: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex]);
        // ES6
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [ ...this.state.persons ];
        persons[personIndex] = person;

        this.setState( { persons: persons });
    }

    togglePeopleHandler = () => {
        const doesShow = this.state.showPeople;
        this.setState({
            showPeople: !doesShow
        });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        // ES6
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
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
                    { 
                        this.state.persons.map( (person, index) => {
                            return <Person 
                                name={person.name} 
                                age={person.age} 
                                click={() => this.deletePersonHandler(index)}
                                key={person.id}
                                change={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            );
        }

        return (
            <div className="page-container text-center">
                <h1 className="display-3 page-title">Flexible Lists</h1>

                <button
                    style={style}
                    onClick={this.togglePeopleHandler}
                    className="mb-3">Toggle People</button>
                    { persons }
                <div>
                    <Link className="btn btn-primary mt-3" to="/flexible-lists/code">To Code</Link>
                </div>
            </div>
        )
    }
}

export default FlexibleLists;