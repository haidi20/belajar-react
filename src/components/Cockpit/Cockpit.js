import React, {useEffect, useContext} from 'react';
import AuthContext  from '../../context/auth-context';

const cockpit = (props) => {
    const authContext = useContext(AuthContext);

    console.log('auth di cockpit '+authContext.authenticated);

    useEffect(() =>{
        console.log('[Cockpit.js] useEffect');

        setTimeout(() => {
            // alert('saved data')
            console.log('[Cockpit.js] saved data')
        }, 1000)

        // seperti componentWillUnmount
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect'); 
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    })

    const classes = [];

    if(props.personsLength <= 2){
      classes.push('red');
    }
    if(props.personsLength <= 1){
      classes.push('bold');
    }
    
    return(
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className="button"
                // alt={this.state.showPersons}
                onClick={props.click}
            >
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Login In</button>
        </div>
    )
}

export default React.memo(cockpit);