import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h3 = ({ children, textAlign }) => {
    return (
        <H3 textAlign={textAlign}>{children}</H3>
    );
};

h3.propTypes = {
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h3.defaultProps = {
    textAlign: "left",
};

const H3 = styled.h3`
    font-display: auto;
    font-family: 'Work Sans';
    text-decoration: underline;
    font-weight: 600;
    text-align: ${props => props.textAlign};
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: .5em;
        @media (min-width: 800px) {
            font-size: 1.75rem;
        }
    }
`


export default h3;