import React, {useEffect} from 'react';

const cockpit = (props) => {
    // useEffect(() =>{
    //     console.log('[Cockpit.js] useEffect');

    //     setTimeout(() => {
    //         alert('saved data')
    //     }, 1000)
    // }, [props.persons]);

    const classes = [];

    if(props.persons.length <= 2){
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    }
    return(
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className="button"
                // alt={this.state.showPersons}
                onClick={props.click}
            >
                Toggle Persons
            </button>
        </div>
    )
}

export default cockpit;