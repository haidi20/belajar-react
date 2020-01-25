import React from 'react';
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

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    const rnd = Math.random();

    if(rnd > 0.7){
        throw new Error('Something went wrong')
    }

    return (
        <StyledDiv>
            <p onClick={props.click}>
                I'm a {props.name} and I am {props.age} years old
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </StyledDiv>
    )
}

export default Person;