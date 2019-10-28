import React from 'react'
import styled from "styled-components";

const p = ({ children }) => {
    return (
        <YellowSquare>
            <p>{children}</p>
        </YellowSquare>
    );
};

const YellowSquare = styled.div`
    background: #FFCC00 0% 0% no-repeat padding-box;
    border: 3px solid #000000;
    font-family: 'Work Sans';
    font-weight: 900;
    width: 50px;
    text-align: center;
`

export default p;