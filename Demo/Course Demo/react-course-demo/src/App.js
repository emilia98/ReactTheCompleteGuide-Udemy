import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'p-1', name: 'Emilia', age: 22 },
      { id: 'p-2', name: 'Max', age: 28 },
      { id: 'p-3', name: 'Manu', age: 29 }
    ],
    otherState: 'some other state',
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    // Shouldn't mutate the object directly, so we copy the object itself
    // const person = Object.assign({}, this.state.persons[personIndex]);
    // ES6
    const person = { 
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
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
    const persons = [ ...this.state.persons ];
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
          { this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button
          style={style}
          onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        { persons}
      </div>
    )
  }
}

export default App;
