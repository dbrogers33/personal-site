import React from 'react'
import styled from "styled-components"



const Input = ({type, placeholder, name, id, onChange}) => {
    return (
        <InputField id={id} type={type} name={name} placeholder={placeholder} onChange={onChange}></InputField>
    );
};

const InputField = styled.input`
    -webkit-appearance: none;
    border-radius: 0;        
    width: 100%;
    font-family: 'Open Sans';
    clear: both;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    border: 1px solid gray;
    color: black;
    letter-spacing: .1em;
    padding: 1em;
    margin: .5em 0;
    @media(min-width: 800px) {
        margin: 0;
    }
`

export default Input;