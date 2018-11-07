import React from 'react';
import ErrorBoundary from '../Errors/ErrorBoundary'

const AnotherPerson = (props) => {
    
   return (<ErrorBoundary>
                <InnerPerson></InnerPerson>
            </ErrorBoundary>);
};

const InnerPerson = (props) => {
    const rnd = Math.random();
    if (rnd > 0.5){
        throw new Error("Simulate Error");
    }
    return (<h1>Item Inner Person</h1>);
}

export default AnotherPerson;