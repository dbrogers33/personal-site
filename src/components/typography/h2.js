import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h2 = ({ children, textAlign }) => {
    return (
        <H2 textAlign={textAlign}>{children}</H2>
    );
};

h2.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h2.defaultProps = {
    textAlign: "left",
};

const H2 = styled.h2`
    font-family: 'Open Sans';
    color: #21201E;
    font-weight: 900;
    font-size: 1.75rem;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    font-display: auto;
        @media (min-width: 800px) {
            font-size: 2.75em;
        }
    }
`

export default h2;