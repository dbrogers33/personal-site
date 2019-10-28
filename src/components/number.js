import React from 'react'
import styled from "styled-components";
import YellowSquare from '../components/yellow-square'

const Number = ({ children }) => {
    return (
        <Logo>
            <YellowSquare>
                {children}
            </YellowSquare>
        </Logo>
    );
};

const Logo = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    left: -.25rem;
`

export default Number;