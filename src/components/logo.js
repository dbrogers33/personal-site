import React from 'react'
import styled from "styled-components";
import YellowSquare from '../components/yellow-square'

const p = ({ children }) => {
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
    top: 15px;
    left: 15px;
`

export default p;