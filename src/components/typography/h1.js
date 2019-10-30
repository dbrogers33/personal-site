import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h1 = ({ children, textAlign }) => {
    return (
        <H1 textAlign={textAlign}>{children}</H1>
    );
};

h1.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h1.defaultProps = {
    textAlign: "left",
};

const H1 = styled.h1`
    font-family: 'Open Sans';
    color: #21201E;
    font-weight: 900;
    font-size: 2rem;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    font-display: auto;
        @media (min-width: 800px) {
            font-size: 3em;
        }
    }
`

export default h1;