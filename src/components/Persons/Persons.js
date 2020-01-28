import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');

    //     return state;
    // }

    componentWillReceiveProps(props){
        console.log('[Person.js] componentWillReceiveProps', props);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');

    //     return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {messagge: 'snapshot!'}; 
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Person.js] componentDidUpdate')
        console.log(snapshot)
    }

    render(){
        console.log('[Person.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person 
                key={person.id}
                click={() => this.props.clicked(person.id)}
                name={person.name} 
                age={person.age} 
                changed={(event) => this.props.changed(event, person.id)}
            />
        })
    }
}

export default Persons;