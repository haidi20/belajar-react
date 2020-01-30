import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
// import Styled from 'styled-components';
import Persons from '../components/Persons/PersonsOld';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxx';
import AuthContext from '../context/auth-context';
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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      }
    })
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

  loginHandler = () => {
    this.setState({
      authenticated: true,
    })

    // console.log(this.state.authenticated)
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

    // console.log('[App.js] render');

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      // <StyleRoot>
        <Aux>
          <button 
            onClick={() => 
              this.setState({showCockpit: !this.state.showCockpit})
            }
          >
            hidden
          </button>
          <AuthContext.Provider 
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler
            }}
          >
            {this.state.showCockpit ? (
              <Cockpit 
                // persons={this.state.persons}
                title={this.props.appTitle}
                personsLength={this.state.persons.length}
                click={this.togglePersonsHandler}
                login={this.loginHandler}
              />
            ) : null}
            {persons}
          </AuthContext.Provider>
        </Aux>
      // </StyleRoot>
    );
  }
}

export default withClass(App, 'App');
