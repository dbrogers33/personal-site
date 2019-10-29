import React from 'react'
import styled from "styled-components"



const Input = ({type, placeholder, name, value, id}) => {
    return (
        <InputField id={id} type={type} name={name} placeholder={placeholder} value={value}></InputField>
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
    margin-top: .5em;
    margin-bottom: .5em;
    border: 1px solid gray;
    color: black;
    letter-spacing: .1em;
    padding: 1em;
`

export default Input;