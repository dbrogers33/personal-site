import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const p = ({ children, textAlign }) => {
    return (
        <P textAlign={textAlign}>{children}</P>
    );
};

p.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

p.defaultProps = {
    textAlign: "left",
};

const P = styled.p`
    font-family: 'Crimson Pro';
    font-display: auto;
    text-align: ${props => props.textAlign};
    font-size: 1.25rem;
    line-height: 1.5em;
    }
`



export default p;