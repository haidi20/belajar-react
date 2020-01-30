import React, {Component} from 'react';
// import Radium from 'radium';
import Styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext  from '../../../context/auth-context';

import './Person.css';

// const StyledDiv = Styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px){
//         width: 450px;
//     }
// `;

class Person extends Component {
    componentDidMount(){
        document.querySelector('input').focus();
    }

    // penting
    static contextType = AuthContext;

    render(){
        // console.log('[Person.js] rendering...');
        // console.log(this.props.isAuth)
        console.log('dari context '+ this.context.authenticated)

        return (
            <Aux>
                <div className="Person">
                    {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> }
                    <p onClick={this.props.click}>
                        I'm a {this.props.name} and I am {this.props.age} years old
                    </p>
                    <p>{this.props.children}</p>
                    <input 
                        type="text" 
                        // ref={(inputEl) => {inputEl.focus()}}
                        onChange={this.props.changed} 
                        defaultValue={this.props.name}
                    />
                </div>
            </Aux>
        )
    }
}

export default withClass(Person, 'person');