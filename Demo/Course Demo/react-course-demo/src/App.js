import React from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Emilia" age="22"/>
      <Person name="Max" age="28"/>
      <Person name="Manu" age="29">My hobbies: Racing</Person>
    </div>
  );
}

export default App;
