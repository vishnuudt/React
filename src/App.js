import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
   return (
      <div className="App">
          <h1>Yeah Got it</h1>
          <Person name="Max" age="21" />
          <Person name="Manu" age="23"> Hobbies: Race </Person>
      </div>
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work'));
  }
}

export default App;
