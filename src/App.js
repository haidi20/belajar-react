import React, { Component } from 'react';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
// import Styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const StyledButton = Styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover{
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black; 
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'sdf234',name: 'Max', age: 28 },
      { id: 'kj2340',name: 'Manu', age: 29 },
      { id: 'gjs529',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // cara lama
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [
      ...this.state.persons
    ]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
                
                click={() => this.deletePersonHandler(person.id)}
                name={person.name} 
                age={person.age} 
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            </ErrorBoundary>
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black',
      // }

    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            className="button"
            // alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons
          </button>
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
