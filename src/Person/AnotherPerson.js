import React from 'react';
import ErrorBoundary from '../Errors/ErrorBoundary'

const AnotherPerson = (props) => {
    const rnd = Math.random();
   return (<ErrorBoundary>
                {
                    (rnd > 0.7) ?
                    JSON.parse(1)    
                    : null
                }
            </ErrorBoundary>);
}

export default AnotherPerson;