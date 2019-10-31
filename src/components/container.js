import React from 'react'
import styled from "styled-components";

const Container = ({ children, id }) => {
    return (
        <Wrap id={id}>{children}</Wrap>
    );
};

const Wrap = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
`



export default Container;