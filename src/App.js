import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is special, cannot be used in functional style of 
  // writing components i.e. without classes
  // and extending from component.
  state = {
    persons : [
      {name : 'state max', age: '23'}
    ]
  }
  
  // click event handler for the button below 
  clickItHandler = (newName) => {
    console.log(newName);
    // this.state.persons[0].name = "Changed it"; //BAD IDEA to change state
    this.setState({
      persons: [
        {name: newName, age: '23'}
      ]
    });

    // verify that react does listen for changes to state or props
    setTimeout(() => {
      this.setState({
        persons: [
          {name: 'time out changed it again', age: '23'}
        ]
      });
    }, 2000);
  }


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: '23'}
      ]
    });

  }

  render() {

    const style = {
      backgroundColor : "orange",
      font : 'inherit',
      border : '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
   return (
      <div className="App">
          <h1>Yeah Got it</h1>
          
          <button style={style} onClick={() => 
          this.clickItHandler("old name")}
          >Click it</button>

          <Person name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.clickItHandler.bind(this, 'yeah new name')}
          nameChange={this.nameChangeHandler}/>
          <Person name="Manu" age="23"> Hobbies: Race </Person>
      </div>
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 
    // 'Does this work'));
  }
}

export default App;
