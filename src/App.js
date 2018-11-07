import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is special, cannot be used in functional style of 
  // writing components i.e. without classes
  // and extending from component.
  state = {
    persons : [
      {id:"some", name : 'state max', age: '23'},
      {id:"new", name : 'state manu', age: '25'}
    ],
    showPerson : false
  }
  
  // click event handler for the button below 
  clickItHandler = (newName) => {
    console.log(newName);
    // this.state.persons[0].name = "Changed it"; //BAD IDEA to change state

    const newPersons = [...this.state.persons];
    newPersons[0].name = "updated";
    this.setState({
      persons: newPersons
    });

    // verify that react does listen for changes to state or props
    setTimeout(() => {
      const newPersons = [...this.state.persons];
      newPersons[0].name = "time out it";
      this.setState({
        persons: newPersons
      });
    }, 2000);
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {return p.id === id});
    const person = this.state.persons[personIndex];
    const personClone = {
      ...person
    };
    personClone.name = event.target.value;
    const personsArr = [...this.state.persons];
    personsArr[personIndex] = personClone;

    this.setState({
      persons: personsArr
    });
  }

  conditionalToggleIt = () => {
    const currentStat = this.state.showPerson;
    this.setState({showPerson: ! currentStat});
  }

  render() {

    const style = {
      backgroundColor : "orange",
      font : 'inherit',
      border : '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const style1 = {
      ...style
    };

    let persons = null;

    if (this.state.showPerson === true){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person name={person.name} 
                      age={person.age} 
                      click={this.clickItHandler.bind(this, 'yeah new name')}
                      nameChange={(event) => this.nameChangeHandler(event, person.id)}
                      key = {person.id} />
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
    }

   return (
      <div className="App">
          <h1>Yeah Got it</h1>
          
          <button style={style} onClick={() => 
          this.clickItHandler("old name")}
          >Click it</button>

          <button style={style1} onClick={
          this.conditionalToggleIt}
          >Toggle It</button>

          { 
            persons
          }
          
      </div>
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 
    // 'Does this work'));
  }
}

export default App;
