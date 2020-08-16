import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Emilia', age: 22 },
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 }
    ],
    otherState: 'some other state'
  });

  const [anotherState, setAnotherState] = useState('anotherValue');

  console.log(personsState, anotherState);

  const switchNamesHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Emi', age: 22 },
        { name: 'Max', age: Math.floor(Math.random() * 30) },
        { name: 'Manu', age: 29 }
      ]
    })
    console.log(personsState);
  }

  return (
    <div className="App">
      <button onClick={switchNamesHandler}>Switch Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: Racing</Person>
    </div>
  )
}

export default App;
