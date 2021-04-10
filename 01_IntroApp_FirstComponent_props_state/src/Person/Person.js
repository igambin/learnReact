import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 200px;
    background-color: whitesmoke;
    box-shadow: 3px 3px 3px;
    margin: 10px;
    border-radius: 5px;
    padding: 10px;
    float: left;

    @media(min-width: 400px): {
        width: 300px;
    }`;
    
const StyledButton = styled.button`
    width: 50px;
    border: 0px solid silver ;
    border-bottom: 1px outset darkgray;`;

const person = (props) =>  {
    let personId = props.personId;
    let name = props.name;
    let age = props.age;

    return (
        <StyledDiv>
            <p>
                <input 
                    type="text" 
                    name={personId} 
                    onChange={props.changed} value={name} 
                    /> is {age} years old
            </p>
            <StyledButton onClick={props.click}>Delete</StyledButton>
        </StyledDiv>
    )
};

export default person;