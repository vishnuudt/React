import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p1>Someone is name: {props.name} and age: {props.age} as the person </p1>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;