import React, { useState } from 'react';
import Person from './Person/Person';
import { Link } from 'react-router-dom';


const ReactHooks = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Emilia', age: 22 },
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 }
        ],
        otherState: 'some other value'
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
        });
    }

    return (
        <div className="page-container text-center">
            <h1 className="display-3 page-title">React Hooks</h1>
            <button onClick={switchNamesHandler} className="mb-3">Switch Names</button>

            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Give your best for React!</Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

            <Link className="btn btn-primary" to="/react-hooks/code">To Code</Link>
        </div>
    )   
}

export default ReactHooks;