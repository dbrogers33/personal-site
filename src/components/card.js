import React from 'react'
import styled from "styled-components"
import Number from "../components/number"
import H3 from './typography/h3'
import P from './typography/p'


const Card = ({number, title, description}) => {
    return (
        <Relative>
            <Number>{number}</Number>
            <H3>{title}</H3>
            <P>{description}</P>
        </Relative>
    );
};

const Relative = styled.div`
    position: relative;
    background: white;
    box-shadow: 10px 10px 10px rgba(0,0,0,.1);
    padding: 3rem;
    border: 1px solid gray;
    border-radius: 2rem;
    margin: 2rem;
`

export default Card;