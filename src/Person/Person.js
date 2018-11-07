import React from 'react';
import "./Person.css";
import AnotherPerson from './AnotherPerson';

const Person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>Someone is name: {props.name} and age: {props.age} as the person </h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}></input>
            <AnotherPerson></AnotherPerson>
        </div>
    );
}

export default Person;