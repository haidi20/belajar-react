import React, { Component } from 'react';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
// import Styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../components/Persons/ErrorBoundary/ErrorBoundary';

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
  constructor(props) {
    super(props)

    console.log('app.js constructor');
  }

  state = {
    persons: [
      { id: 'sdf234',name: 'Max', age: 28 },
      { id: 'kj2340',name: 'Manu', age: 29 },
      { id: 'gjs529',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Ap.js] getDerivedStateFromProps', props);
  //   return state; 
  // }

  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[App.js] shouldComponentUpdate');

  //   return false;
  // }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

    console.log('[App.js] render');

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      // <StyleRoot>
        <div className="App">
          <Cockpit 
            persons={this.state.persons}
            click={this.togglePersonsHandler}
          />
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
