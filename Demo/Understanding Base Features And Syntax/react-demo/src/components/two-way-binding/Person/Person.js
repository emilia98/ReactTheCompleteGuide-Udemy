import React from 'react';

const person = (props) => {
    return (
        <div>
            <h3 onClick={props.click}>I'm {props.name} and {props.age} years old!</h3>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>  
    )
}

export default person;