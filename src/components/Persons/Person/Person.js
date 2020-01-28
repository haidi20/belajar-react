import React, {Component} from 'react';
// import Radium from 'radium';
import Styled from 'styled-components';

// import './Person.css';

const StyledDiv = Styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width: 450px;
    }
`;

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');

        return (
            <StyledDiv>
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </StyledDiv>
        )
    }
}

export default Person;