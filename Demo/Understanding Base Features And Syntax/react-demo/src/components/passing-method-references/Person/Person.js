import React from 'react';

const person = (props) => {
    return (
        <div>
            <h3 onClick={props.click}>I'm {props.name} and {props.age} years old!</h3>
            <p>{props.children}</p>
        </div>  
    )
}

export default person;