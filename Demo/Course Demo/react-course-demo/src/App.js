import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Emilia', age: 22 },
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 }
    ],
    otherState: 'some other state'
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
        { name: 'Max', age: Math.floor(Math.random() * 30) },
        { name: 'Manu', age: 29 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.switchNamesHandler('Emi!')}>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNamesHandler.bind(this, 'Emilia!')}
          change={this.nameChangedHandler}
          />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My hobbies: Racing</Person>
      </div>
    )
  }
}

export default App;
